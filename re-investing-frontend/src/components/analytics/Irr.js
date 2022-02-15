import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Irr({price}) {
    const [years, setYears] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [costOfCapital, setCostOfCapital] = useState('');
    const [monthlyRent, setMonthlyRent] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [vacanyRate, setVacancyRate] = useState('');
    const [npv, setNpv] = useState('');
    const [outcome, setOutcome] = useState([]);


 



  return (
   <form>
       
       <label className='irr-label'> Cost Of Capital %</label>
       <input className='irr-input' type='number' onChange={(e) => setCostOfCapital(e.target.value/100)}/>
       <br></br>
       <label className='irr-label'> Monthly Rent %</label>
       <input className='irr-input' type='number' onChange={(e) => setMonthlyRent(e.target.value)}/>
       <br></br>
       <label className='irr-label'> Monthly Expenses %</label>
       <input className='irr-input' type='number' onChange={(e) => setMonthlyExpenses(e.target.value/100)}/>
       <br></br>
       <label className='irr-label'> Vacancy Rate %</label>
       <input className='irr-input' type='number' onChange={(e) => setVacancyRate(e.target.value/100)}/>

   </form>
  )
}

export default Irr