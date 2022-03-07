import React from 'react'
import Menu from '../general components/Menu'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import SessionController from './SessionController'
import "./genComponents.css";

const Header = () => {
  return (
    <div className='header'>
        <HomePage/>
        <SearchBar/>
        <SessionController name="Login"/>
        <SessionController name="SignIn"/>
        <SessionController name="LogOut"/>
    </div>
  )
}

export default Header