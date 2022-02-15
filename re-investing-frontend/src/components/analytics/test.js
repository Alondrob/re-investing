import React, {useState, useContext, createContext} from 'react';
import { Table, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react/cjs/react.development';
import '../styling/CashOnCash.css'
import CashOnCash from './CashOnCash';
import Irr from './Irr';

 const Loan = ({price}) => {

  const [years, setYears] = useState('')
  const [downPayment, setDownPayment] = useState('')
  const [rate, setRate] = useState('')
  const [renderLoan, setRenderLoan] = useState(false);
  const [renderCoc, setRenderCoc] = useState(false);
  const [renderIrr, setRenderIrr] = useState(false);
  const [loanObj, setLoanObj] = useState([])
  

   
  const loanAmount = (e) => {
      e.preventDefault()
      
     let arr = []

      for (let i=0; i<years; i++) {
        
        let loan = price - downPayment*price;
        console.log(loan)
        let principal = (loan/years)
        let remainedLoan = (loan - (principal * (i +1)));
        let interstPmt = (loan - (principal * i)) * rate
        let pmt =  principal + interstPmt
        let equity = downPayment*price + (principal * (i +1))
      
        
        
        arr.push( {
          year: i + 1,
          loan: loan,
          principal: principal,
          remainedLoan: remainedLoan,
          interstPmt: interstPmt,
          pmt: pmt,
          equity: equity
        })
       
      }
    setLoanObj(arr)
  }

  //render sub-components
  
  const presentCoc = () => {
    setRenderCoc(!renderCoc)
  }
  
  const presentIrr = () => {
    setRenderIrr(!renderIrr)
  }

 
  //creating an array of values to give the UI options to chose from.
  const arr1 = () => {
    let newArr = [];
    for (let i = 0; i <= 100; i += 2.5) {
      newArr.push(i)
    }
    return newArr;
  }
  let downPmtArr = arr1()
  
  //creating an array of values for the rate
  const arr2 = () => {
    let newArr = [];
    for (let i = 0; i <= 10; i += 0.05) {
      newArr.push(i)
    }
    return newArr;
  }
  
  let rateArr = arr2()


  console.log(loanObj)



   
  

  return (
   
      
  <div className='page-body'>
  
        <form onSubmit={loanAmount} className='form'>

            <label className='label'> Years</label>
            <input className='input' type="number" onChange={(e) => setYears(e.target.value)}/>

            <label className='label'> Down-Payment </label>
          
               <select
                      className='select'
                      onChange={(e) => setDownPayment(parseFloat((e.target.value) / 100  ))}
               >
                 
                 {downPmtArr.map((val, i) =>
                    <option>{downPmtArr[i]}</option>
                  )} %
               </select>
            

            <label className='label'> Rate % </label>

            <select
              className='select'
              onChange={(e) => setRate(parseFloat((e.target.value / 100)))}
            >
              {rateArr.map((val, i) =>
                <option className='option'>{rateArr[i].toFixed(2) * 10}</option>
              )}
            </select>

            
           
            
            <input type='submit' />

        </form>

      {/* ============= */}
      
        <div className='table-div'>

            {loanObj != "" ? <table className='table'>
              <thead>
                <th> {loanObj != "" ? "#": ""}</th>
                {loanObj.map((item, i) => <th> Year: {item.year}</th>)}
              
              </thead>

              <tr className='table-row'> 
                  <td className='table-cell'>{loanObj != "" ? "Principal": ""}</td> 
                  {loanObj.map((item) => 
                    <td className='table-cell'> ${(item.principal).toFixed(0)}</td>
                  )} 
              </tr>

              <tr className='table-row'> 
              <td className='table-cell'>{loanObj != "" ? "Interest": ""}</td> 
                {loanObj.map((item) => 
                  <td className='table-cell'> ${Math.round(item.interstPmt)}</td>
                )} 
              </tr>

              <tr className='table-row'>
                 <td className='table-cell'>{loanObj != "" ? "Total Finance Expenses": ""}</td> 
                 {loanObj.map((item) => 
                  <td className='table-cell'> ${Math.round(item.interstPmt) + Math.round(item.interstPmt)}</td>
                 )} 
              </tr> 
          </table>: ""}

          </div>

          <button onClick={presentCoc}> Run Cash On CashOnCash </button>
          <button onClick={presentIrr}> Run IRR </button>

          {renderCoc && <CashOnCash loan={loanObj}/>}
          {renderIrr && <Irr loan={loanObj}/>}
        
      
      
      
      </div>
         
  ) 
}

export default Loan;
