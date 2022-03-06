import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaPiggyBank, FaBlog, FaCalculator, FaBuilding } from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md';
import SideBarIcon from './SideBarIcon';
import {HiFolder} from 'react-icons/hi'
import MenuIcon from './SideBarIcon';


const SideBar = () => {

    return (
        <>

            <SideBarIcon name="" icon={<FaHome />} />
            <SideBarIcon name="Comunity Blogs" icon={<FaBlog />} />
            <SideBarIcon name="Funding" icon={<FaPiggyBank />} />
            <SideBarIcon name="My Reports" icon={<HiFolder />} />
            <SideBarIcon name="Saved Properties" icon={<FaBuilding/>} />
            <SideBarIcon name="Calculators" icon={<FaCalculator/>} />

            {/* <Link to="/">Home Page</Link>&nbsp;
            <Link to="/my-properties">My Poperties</Link>&nbsp;
            <Link to="/sign-up">Sign-UP </Link>&nbsp;
            <Link to="/Login">Loggin </Link>&nbsp;
            <Link to="/search-properties"> Search Properties </Link> */}
        </>
    )


}

export default SideBar;