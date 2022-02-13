import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Irr({price}) {
    const [years, setYears] = useState('')
    const [downPayment, setDownPayment] = useState('')
    const [rate, setRate] = useState('')
    const [projectedRent, setProjectedRent] = useState('')
    const [rentIncrease, setRentIncrease] = useState('')
    const [expenseRate, setExpenseRate] = useState('')
    const [outcome, setOutcome] = useState([])



  return (
   <form>
       <label className='irr-label'> Years </label>
       <input className='irr-input' type='number' onChange={(e) => setYears(e.target.value)}/>
       <label className='irr-label'> DownPayment </label>
       <input className='irr-input' type='number' onChange={(e) => setDownPayment(e.target.value)}/>
       <label className='irr-label'> Years </label>
       <input className='irr-input' type='number' onChange={(e) => setYears(e.target.value)}/>
       <label className='irr-label'> Years </label>
       <input className='irr-input' type='number' onChange={(e) => setYears(e.target.value)}/>
       <label className='irr-label'> Years </label>
       <input className='irr-input' type='number' onChange={(e) => setYears(e.target.value)}/>

   </form>
  )
}

export default Irr