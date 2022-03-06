import React from 'react'
import {FaSearch} from 'react-icons/fa';

function SearchBar() {
  return (
    <div>
        <input placeholder='Search...'
        />
        <FaSearch/>
    </div>
  )
}

export default SearchBar