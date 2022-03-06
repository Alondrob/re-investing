import React from 'react'
import Menu from '../general components/Menu'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import SessionController from './SessionController'

const Header = () => {
  return (
    <div style={{display:"flex", margin:""}}>
        <HomePage/>
        <SearchBar/>
        <SessionController name="Log In" />
        <SessionController name="Sign In" />
        <SessionController name="Log Out" />
    </div>
  )
}

export default Header