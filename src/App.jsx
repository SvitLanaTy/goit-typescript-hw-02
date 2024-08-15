import { useEffect, useState } from "react";
import { getData } from "./services/api";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchImages = async (query, page) => {
    try {
      setIsLoading(true);
      setError('');
      const response = await getData(query, page);      
      if (response.results.length === 0) {
        setError('No results found.');
      }

      if (page === 1) {
        setImages(response.results);
      } else {
        setImages(prevImages => [...prevImages, ...response.results])
      }

      if (response.total_pages > page) {
        setPage(page + 1);
      } else {
        setPage(null);
      }
    } catch (err) {
      setError('Something went wrong, try again.');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {    
      if (query) {
        setPage(1);
        fetchImages(query, 1);
      }
    }, [query]);

    const handleSearch = (value) => {
          setQuery(value);          
        };
  
    const onLoadMore = () => {
      if (page) {
        fetchImages(query, page);
      }
    };  
    
    const openModal = (image) => {
      setIsOpen(true);
      setSelectedImage(image);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      setSelectedImage(null);
    };
  
    return (
      <>
        <div className='container'> 
          <SearchBar onSubmit={handleSearch} />
          {error && <ErrorMessage error={error} />}
          {isLoading && <Loader />}
          {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
          {images.length > 0 && page && !isLoading && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </div>
        <ImageModal image={selectedImage} isOpen={isOpen} closeModal={closeModal} />
      </>
    )
  }
  
  export default App
