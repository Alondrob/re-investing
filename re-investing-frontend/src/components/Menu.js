import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {

  return (
    <>
      <Link to="/">Home Page</Link>&nbsp;
      <Link to="/my-properties">My Poperties</Link>&nbsp;
      <Link to="/sign-up">Sign-UP </Link>&nbsp;
      <Link to="/Login">Loggin </Link>&nbsp;
      <Link to="/search-properties"> Search Properties </Link>
    </>
  )
      
 
}

export default Menu;
