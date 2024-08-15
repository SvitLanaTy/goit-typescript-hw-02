import css from "./ImageCard.module.css";

const ImageCard = ({ image,  openModal}) => {
  return (
    <div className={css.card} >
      <img 
        className={css.img}
        src={image.urls.small} 
        alt={image.description}
        onClick={() => openModal( image)}
      />
    </div>
  );
}

export default ImageCard

