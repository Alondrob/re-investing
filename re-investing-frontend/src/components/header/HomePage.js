import React from 'react';
import {FaHome} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import "./genComponents.css";

function HomePage() {
let navigate = useNavigate();

const handleRoute = () => {
  let path = "/";
  navigate(path)
}

  return (
    <div className='home-page' onClick={handleRoute}>
      <div><FaHome className='home-icon' /></div>
      
      <h3>ReInvestor</h3>
    </div>
  ) 
}

export default HomePage;
