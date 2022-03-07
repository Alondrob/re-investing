import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaPiggyBank, FaBlog, FaCalculator, FaBuilding, FaSearch } from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md';
import SideBarIcon from './SideBarIcon';
import {HiFolder} from 'react-icons/hi'
import './sideBar.css';


const SideBar = () => {

    return (
       
        <div className='sideBar'>
                <Link to="/search-properties" >
                    <SideBarIcon name="Search Properties" icon={<FaSearch />} />
                </Link>

                <Link to="/blogs">
                    <SideBarIcon name="Comunity Blogs" icon={<FaBlog />} />

                </Link>

                <Link to="/funding">
                    <SideBarIcon name="Funding" icon={<FaPiggyBank />} />
                </Link>

                <Link to="/reports">
                    <SideBarIcon name="My Reports" icon={<HiFolder />} />
                </Link>

                <Link to="/saved-properties">
                    <SideBarIcon name="Saved Properties" icon={<FaBuilding />} />
                </Link>

                <Link to="/calculator">
                    <SideBarIcon name="Calculators" icon={<FaCalculator />} />
                </Link>
        </div>
   
            
            
           
            
    
        
    )


}

export default SideBar;