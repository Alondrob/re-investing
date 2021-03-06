import {useState} from 'react'
import './Analytics.css'

function Loan({handleLoan}) {
    const [years, setYears] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [rate, setRate] = useState('');

    const loanTerms = (e) => {
        e.preventDefault();

        handleLoan({
            years: years,
            downPayment: downPayment,
            rate: rate
        })
    }
  return (
      <div className='income-div'>
          


              <label className='pnl-label'> Years $</label>
              <input
                  className='pnl-input'
                  type='number'
                  onChange={(e) => setYears(parseInt(e.target.value))}
             />

              <label className='pnl-label'>Down Payment %</label>
              <input
                  className='pnl-input'
                  type='number'
                  min={0} max={20} step={0.25}
              onChange={(e) => setDownPayment(parseFloat(e.target.value / 100))}
                  
              />


             <label className='pnl-label'>Rate %</label>
              <input
                  className='pnl-input'
                  type='number'
                  min={0} max={20} step={0.25}
                  onChange={(e) => setRate(parseFloat(e.target.value / 100))}
                  
              />


              <label className='pnl-label'>Rent Appreciation %</label>
              <input
                  className='pnl-input'
                  type='number'
                  min={0} max={20} step={0.25}
               
              />


         
      </div>

  )
}

export default Loan