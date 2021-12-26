import React from 'react'

const Data = () => {

    const propertiesRequest = () => {
        const url = 'http://localhost:3000/properties'
        const response = await fetch(url);
        const responseJson = await response.json();
    }
    return (
        <div>
            
        </div>
    )
}

export default Data
