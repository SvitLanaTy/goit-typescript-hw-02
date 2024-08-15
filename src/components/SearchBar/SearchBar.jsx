import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();    
    if (value.trim() === '') {
        return toast.error('Please enter the text for search!', {          
          position: 'top',
      });
      }
      
    onSubmit(value);    
  }

  
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus          
        />
        <button className={css.headerBtn} type="submit">
          Search
        </button>
        <Toaster/>
      </form>
    </header>
  );
}

export default SearchBar;