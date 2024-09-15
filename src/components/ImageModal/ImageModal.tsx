import { FC } from "react";
import { Image } from "../../types";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, isOpen, closeModal }) => {
  if (!image || !image.urls) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(71, 69, 69, 0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          border: "none",
          padding: "0",
          maxWidth: "900px",
          margin: "auto",
          inset: "auto",
          borderRadius: "0",
          backgroundColor: "transparent",
        },
      }}
    >
      {image && (
        <div className={css.content}>
          <img
            className={css.img}
            src={image.urls.regular}
            alt={image.description || "Image example"}
            style={{ width: "100%", height: "auto" }}
          />
          <div>
            <p className={css.text}>Likes: {image.likes}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
