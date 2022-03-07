import React from 'react'
import './sideBar.css';

const SideBarIcon = ({icon, name}) => {
  
    return (

    <div >
        <div className='sideBarIcon'>
            {icon}
            <p> {name}</p>
        </div>  
    </div>
  )
}

export default SideBarIcon;