import React, {useEffect, useState} from 'react'

const Data = () => {

    const [properties, setProperties] = useState([])

    const propertiesRequest = async () => {
        const url = 'http://localhost:3000/properties'
        const response = await fetch(url);
        const responseJson = await response.json();
        setProperties(responseJson)
    }

    useEffect(() => {
        propertiesRequest();
    }, [])


    return (
        <div>
            {properties.map((value) => <div>
                
                    <div>
                    <p> {value.address}</p>
                    <img src={value.image} alt='property' />  
                    </div>
                
            </div>

                
                    
                
                
                )}
        </div>
    )
}

export default Data
