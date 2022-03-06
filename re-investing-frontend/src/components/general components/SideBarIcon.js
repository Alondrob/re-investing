import React from 'react'

const SideBarIcon = ({icon, name}) => {
  
    return (

    <div style={{display:"flex"}}>
            <div style={{ display: "flex" }}>
                {icon}
                <p> {name}</p>
            </div>
        
       
    </div>
  )
}

export default SideBarIcon;