import React from 'react';
import './SearchInput.css';
import { IoSearchCircleSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className='searchInputForm'>
        <input type='text' placeholder='search...' className='seachInputBox' />
        <button type='submit' className='searchInputIconButton'>
          <IoSearchCircleSharp />
        </button>
    </form>
  )
}

export default SearchInput;