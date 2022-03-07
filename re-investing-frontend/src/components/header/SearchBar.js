import React from 'react'
import {FaSearch} from 'react-icons/fa';
import "./genComponents.css";

function SearchBar() {
  return (
    <div className='searchBar'>
        <input className="search" type="text" placeholder='Search...'
        />
        <div >
        <FaSearch className='searchIcon'  />
        </div>
     
    </div>
  )
}

export default SearchBar