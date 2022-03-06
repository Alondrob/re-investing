import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CashOnCash from '../analytics/CashOnCash'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/SelectedProperty.css'
import Irr from '../analytics/Irr';
import Loan from '../analytics/test';
import ProfitAndLoss from '../analytics/ProfitAndLoss';


const SelectedProperty = () => {
    const [asset, setAsset] = useState([]);
    const [renderCoc, setRenderCoc] = useState(false)
    const [renderLoan, setRenderLoan] = useState(false)
    const [ebitDa, setEbitda] = useState(false)
    const[loanObj, setLoanObj] = useState({})
    const {id} = useParams();


   
    const getAsset = () => {
        let url = `http://localhost:3000/properties/${id}`

        fetch(url)
        .then(response => response.json())
        .then(property => setAsset(property))
    }

    useEffect(() => {
        getAsset();
    }, []);

    // const CocCalculator = () => {
    //     setRenderCoc(!renderCoc)
    // };

    // const IrrCalculator = () => {
    //     setRenderIrr(!renderIrr)
    // };
    const loanCalculator = () => {
        setRenderLoan(!renderLoan)
    };

    const metricsGenerator = () => {
        setEbitda(!ebitDa)
    }

    let dollarUSLocale = Intl.NumberFormat('en-US');
    let price = dollarUSLocale.format(asset.price)
  
    return ( 
       
    <Container>
        <Row>
                <img className='property-image' src={asset["image"]}/>
                <p>State:   {asset['address']}</p>
                <p> City :   {asset['city']}</p>
                <p> County: {asset['county']}</p>
                <p>Price: ${price}</p>
                <p>Property Type: {asset['property_type']}</p>
                {/* <button onClick={loanCalculator}> Loan Calculator </button>
                 { renderLoan && <Loan price={asset.price}/> } */}
                 <button onClick={metricsGenerator}> Generate Metrics - Omer Levy  </button>
                 { ebitDa && <ProfitAndLoss price={asset.price}/> }
                {/* <button onClick={CocCalculator}> Cash On Cash </button>
                <button onClick={IrrCalculator}> IRR </button> */}
                {/* {renderCoc && <CashOnCash price={asset.price}/>}
                {renderIrr && <Irr price={price}/>} */}
                
        </Row>
    </Container>
 

    );
   
}

export default SelectedProperty;
