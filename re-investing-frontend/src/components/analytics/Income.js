import React, {useState} from 'react'
import '../styling/Analytics.css'

function Income({handleIncome}) {

    const [monthlyRent, setMonthlyRent] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [vacanyRate, setVacancyRate] = useState('');
    const [rentIncrease, setRentIncrease] = useState('');
    const [appreciation, setAppreciation] = useState('');

    const incomeTerms = (e) => {
        e.preventDefault();

        handleIncome({
          monthlyRent: monthlyRent,
          monthlyExpenses: monthlyExpenses,
          vacanyRate: vacanyRate,

        })
    }

  return (
    
        <form onChange={incomeTerms} className='pnl-form'>

            
                <label className='pnl-label'> Projected Monthly Rent $</label>
                  <input 
                        className='pnl-input' 
                        type='number'
                        onChange={(e) => setMonthlyRent(parseInt(e.target.value))}
                  />
          
         

            <label className='pnl-label'>Monthly Expenses %</label>
              <input 
                    className='pnl-input' 
                    type='number' 
                    min={0} max={20} step={0.25}
                    onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value/100))}
              />


            <label className='pnl-label'>Vacancy Rate %</label>
             <input 
                    className='pnl-input' 
                    type='number' 
                    min={0} max={20} step={0.25}
                    onChange={(e) => setVacancyRate(parseFloat(e.target.value/100))}
              />

            <label className='pnl-label'>Rent Appreciation %</label>
             <input 
                    className='pnl-input' 
                    type='number' 
                    min={0} max={20} step={0.25}
                    onChange={(e) => setRentIncrease(parseFloat(e.target.value/100))}
              />

            

       

        </form>
 
  )
}

export default Income