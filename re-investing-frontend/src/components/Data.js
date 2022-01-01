import React, {useEffect, useState} from 'react'
import './Data.css'
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

                {properties.map((value) =>

                <Container>
                <Row>
                    <Col md={3}>
                            <Card style={{ width: '30rem', color: "#000" }} className='card'>

                                <Card.Img src={value.image} alt='property' />
                                <Card.Text className="card-text" style={{ backgroundColor: 'black', color: 'white' }}> {value.address} </Card.Text>


                            </Card>
                    </Col>
                </Row>
                </Container>
                )}

                    <Button> Test Button </Button>

                </>
          
       
           
                
            

                
                    
                
                
                
        
    )
}

export default Data
