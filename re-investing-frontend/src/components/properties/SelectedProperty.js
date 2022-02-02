import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Calculator from '../analytics/Calculator';

const SelectedProperty = () => {
    const [asset, setAsset] = useState([]);
    const [render, setRender] = useState(false)
    const {id} = useParams();


    console.log(id)
    const getAsset = () => {
        let url = `http://localhost:3000/properties/${id}`

        fetch(url)
        .then(response => response.json())
        .then(property => setAsset(property))
    }

    useEffect(() => {
        getAsset();
    }, []);

    const calculatorClick = () => {
        setRender(!render)
    }

    let dollarUSLocale = Intl.NumberFormat('en-US');
    let price = dollarUSLocale.format(asset.price)
  
    return <div>
        <img src={asset["image"]}/>
        <li>State:   {asset['address']}</li>
        <li> City:   {asset['city']}</li>
        <li> County: {asset['county']}</li>
        <li> Price: ${price}</li>
        <li>Property Type: {asset['property_type']}</li>
        <button onClick={calculatorClick}> Run Metrics </button>
        {render && <Calculator price={asset.price}/>}
    </div>;
   
}

export default SelectedProperty;
