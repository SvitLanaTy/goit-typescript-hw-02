import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {

  return (
    <button 
      type='button'
      className={css.btn}
      onClick={onLoadMore}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn