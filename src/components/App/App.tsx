import { useEffect, useState } from "react";
import { getData } from "../../services/api";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { Image, Data } from "../../types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number | null>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchImages = async (query: string, page: number) => {
    try {
      setIsLoading(true);
      setError("");
      const response: Data = await getData(query, page);
      if (response.results.length === 0) {
        setError("No results found.");
      }

      if (page === 1) {
        setImages(response.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.results]);
      }

      if (response.total_pages > page) {
        setPage(page + 1);
      } else {
        setPage(null);
      }
    } catch (err) {
      setError("Something went wrong, try again.");
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

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const onLoadMore = () => {
    if (page) {
      fetchImages(query, page);
    }
  };

  const openModal = (image: Image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container">
        <SearchBar onSubmit={handleSearch} />
        {error && <ErrorMessage error={error} />}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {images.length > 0 && page && !isLoading && (
          <LoadMoreBtn onLoadMore={onLoadMore} />
        )}
      </div>
      <ImageModal
        image={selectedImage}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
