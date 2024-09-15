import { FC } from "react";
import { Image } from "../../types";

import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  openModal: (event: any) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;
