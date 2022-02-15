import React, {useState, useEffect} from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../components/SelectedState.css';
import {Link} from 'react-router-dom'

const  PropertyCard = ({propertyData}) => {

    
  return (
    
    <Card>
          <Link to={`/selected-property/${propertyData.id}`}>
            <Card.Img  src={propertyData.image}/>
            <Card.Text> 
                Address: {propertyData.address}<br></br>
                  Price: {propertyData.price}<br></br>
                  Beds: {propertyData.beds}<br></br>
                  Baths: {propertyData.baths}<br></br>
            </Card.Text>
          </Link>
          
    </Card>
  )
}

export default PropertyCard;
