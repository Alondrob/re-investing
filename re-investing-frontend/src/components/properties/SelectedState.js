import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Row, Container, Col } from 'react-bootstrap'
import '../../components/SelectedState.css';
import PropertyCard from './PropertyCard';

const SelectedState = ({abbrevation}) => {

 const [properties, setProperties] = useState([]);

 const propertiesRequest = async () => {
    const url = 'http://localhost:3000/properties'
    const response = await fetch(url);
    const responseJson = await response.json();
    setProperties(responseJson)
 }
 
 useEffect(() => {
    propertiesRequest()
 }, [])

 

    return <>
        <Container>
            <Row>
                {properties.map((value, i) =>


                    <Col lg={4}>
                       <PropertyCard propertyData={value}/>
                    </Col>


                )}

            </Row>
        </Container>
       
    </>
}

export default SelectedState;
