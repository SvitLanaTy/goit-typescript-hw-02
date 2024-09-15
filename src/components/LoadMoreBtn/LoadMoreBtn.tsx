import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button type="button" className={css.btn} onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
