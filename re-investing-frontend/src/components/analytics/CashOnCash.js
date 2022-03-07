import React, {useContext, useState} from 'react';
import { Table, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react/cjs/react.development';

import {Loan} from './test'

const CashOnCash = ({loan}) => {

  // const {loanObj, setLoanObj} =  useContext(LoanContext)

 
 
  const [projectedRent, setProjectedRent] = useState('')
  
  const [expenseRate, setExpenseRate] = useState('')
  const [vacanyRate, setVacancyRate] = useState('')
  const [outcome, setOutcome] = useState([])
  

   
  // const calculateCoc = (e) => {
  //     e.preventDefault()
      
  //    let arr = []
  //     for (let i=0; i<100; i++) {
      
  //       // let rent = projectedRent * ((rentIncrease + 1)**i)
  //       // let expenses = rent*12 * expenseRate
        
        
  //       arr.push( {
  //         year: i + 1,
  //         loan: loan,
  //         rent: rent,
  //         expenses: expenses,
          
  //       })
       
  //     }
  //   setOutcome(arr)
  // }

 
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

  const netIncome = outcome.map((item, i) => (item.rent * 12 - (item.principal + item.interstPmt) ))


  console.log('hello')

   
  

  return (
   
      // <LoanContext.Provider>
  <div className='page-body'>
  
        <form  className='form'>

            

            
            <label className='label'> Projected Monthly Rent $ </label>
              <input className='input' type="number"  min={0} max={100000} onChange={(e) => setProjectedRent(e.target.value)} /><br></br>

            <label className='label'> Monthly Expenses % </label>

            <select
              className='select'
              onChange={(e) => setExpenseRate(parseFloat((e.target.value/100)))}
            >
              {rateArr.map((val, i) =>
                <option className='option'>{rateArr[i].toFixed(2) * 10}</option>
              )}
            </select><br></br>
            
            {/* <label className='label'> Annual Rent Increase By % </label>
            <input className='input' type="float"  min={0} max={100} onChange={(e) => setRentIncrease(parseFloat(e.target.value/100))} /><br></br> */}
            
            <input type='submit' />

        </form>
            <div className='table-div'>
            {outcome != "" ? <table className='table'>
              <thead>
                <th> {outcome != "" ? "#": ""}</th>
                {outcome.map((item, i) => <th> Year: {item.year}</th>)}
              
              </thead>

            <tr className='table-row'><td className='table-cell'>{outcome != "" ? "Annual income": ""}</td>{outcome.map((item, i) => <td className='table-cell'>${Math.round(item.rent * 12)}  </td>)}</tr>

            <tr className='table-row'> <td className='table-cell'>{outcome != "" ? "Expenses": ""}</td>  {outcome.map((item, i) => <td className='table-cell'>$({Math.round(item.rent*12*expenseRate)}) </td> )}</tr>

              <tr className='table-row'> <td className='table-cell'>{outcome != "" ? "Principal": ""}</td> {outcome.map((item) => <td className='table-cell'> $({(item.principal).toFixed(0)})</td>)} </tr>

              <tr className='table-row'> <td className='table-cell'>{outcome != "" ? "Interest": ""}</td> {outcome.map((item) => <td className='table-cell'> $({Math.round(item.interstPmt)})</td>)} </tr>

              <tr className='table-row'> <td className='table-cell'>{outcome != "" ? "Net Income": ""}</td>
                    {outcome.map(item =>
                      <td className='table-cell'>
                        ${Math.round(item.rent * 12 - (item.principal + item.interstPmt + item.rent * 12 * expenseRate))}
                      </td>
                    )
                    }
                        
              </tr>

            
                  
            
          </table>: ""}
          </div>
        
          </div>
        
          // </LoanContext.Provider>
      
   
     
  ) 
}

export default CashOnCash;
