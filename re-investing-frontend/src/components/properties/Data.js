import React, {useEffect, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Row, Container, Col } from 'react-bootstrap'

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
      
                <>
            <Container>
                <Row>
                {properties.map((value) =>

                
                    <Col  lg={3}>
                            <Card >

                                <Card.Img src={value.image} alt='property' />
                                <Card.Text > {value.address} </Card.Text>


                            </Card>
                    </Col>
                
                
                )}

                </Row>
            </Container>
                    <Button> Test Button </Button>
                    
                </>
          
       
           
                
            

                
                    
                
                
                
        
    )
}

export default Data
