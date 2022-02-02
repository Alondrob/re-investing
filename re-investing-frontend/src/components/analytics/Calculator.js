import React, {useState} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Calculator = ({price}) => {

  const [years, setYears] = useState('')
  const [downPayment, setDownPayment] = useState('')
  const [rate, setRate] = useState('')
  const [projectedRent, setProjectedRent] = useState('')
  const [rentIncrease, setRentIncrease] = useState('')
  const [expenseRate, setExpenseRate] = useState('')
  const [outcome, setOutcome] = useState([])
  

   
  const loanAmount = (e) => {
      e.preventDefault()
     let arr = []
      for (let i=0; i<years; i++) {
        
        let loan = price - downPayment;
        let principal = (loan/years)
        let remainedLoan = (loan - (principal * (i +1)));
        let interstPmt = (loan - (principal * i)) * rate
        let pmt =  principal + interstPmt
        let equity = downPayment + price - remainedLoan
        let rent = projectedRent * ((rentIncrease + 1)**i)
        let expenses = rent*12 * expenseRate
        
        
        arr.push( {
          year: i + 1,
          loan: loan,
          principal: principal,
          remainedLoan: remainedLoan,
          interstPmt: interstPmt,
          pmt: pmt,
          rent: rent,
          expenses: expenses,
          equity: equity
        })
       
      }
    setOutcome(arr)
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

  const netIncome = outcome.map((item, i) => (item.rent * 12 - (item.principal + item.interstPmt) ))

   console.log(rate/100)
  

  return (
      <div>
        <form onSubmit={loanAmount}>

            <label> Years</label>
            <input type="number" onChange={(e) => setYears(e.target.value)}/>

            <label> Down-Payment </label>
               <select
                      onChange={(e) => setDownPayment(parseFloat((e.target.value) / 100 * (price)))}
               >
                 {downPmtArr.map((val, i) =>
                    <option>{downPmtArr[i]}</option>
                  )} %
               </select>
            

            <label> Rate % </label>

            <select
              onChange={(e) => setRate(parseFloat((e.target.value / 100)))}
            >
              {rateArr.map((val, i) =>
                <option>{rateArr[i].toFixed(2) * 10}</option>
              )}
            </select>

            
            <label> Projected Monthly Rent $ </label>
              <input type="number"  min={0} max={100000} onChange={(e) => setProjectedRent(e.target.value)} />

            <label> Monthly Expenses % </label>

            <select
              onChange={(e) => setExpenseRate(parseFloat((e.target.value/100)))}
            >
              {rateArr.map((val, i) =>
                <option>{rateArr[i].toFixed(2) * 10}</option>
              )}
            </select>
            
            <label> Annual Rent Increase By % </label>
            <input type="float"  min={0} max={100} onChange={(e) => setRentIncrease(parseFloat(e.target.value/100))} />
            
            <input type='submit' />

        </form>

        <Table>
          <thead>

            <tr>
              <th> #</th>
              {outcome.map((item, i) => <th> Year: {item.year}</th>)}
            </tr>

          <tr> Annual Income {outcome.map((item, i) => <td>${Math.round(item.rent * 12)}  </td>)}</tr>

          <tr> Expenses {outcome.map((item, i) => <td>$({Math.round(item.rent*12*expenseRate)}) </td> )}</tr>

            <tr> Principal {outcome.map((item) => <td> $({Math.round(item.principal)})</td>)} </tr>

            <tr> Interest {outcome.map((item) => <td> $({(item.interstPmt)})</td>)} </tr>

            <tr> Net Income 
                  {outcome.map(item =>
                    <td>
                      ${Math.round(item.rent * 12 - (item.principal + item.interstPmt + item.rent * 12 * expenseRate))}
                    </td>
                  )
                  }
                       
            </tr>

            <tr> Cash On Cash 
                      {outcome.map(item =>
                        <td>%
                          {((((item.rent * 12) - (item.principal + item.interstPmt + item.rent*12*expenseRate))/(downPayment))*100).toFixed(2) }
                        </td>
                        )
                      }
            </tr>
         
                
          </thead>
        </Table>
        
      </div>
  ) 
}

export default Calculator;
