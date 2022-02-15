import React, {useState} from 'react'
import '../styling/Analytics.css'

const Projection = ({handleProjection}) => {

  const [costOfCapital, setCostOfCapital] = useState('');
  const [appreciation, setAppreciation] = useState('')
  const [exitPoint, setExitPoint] = useState('')
  

    const projectionTerms = (e) => {
        e.preventDefault();

        handleProjection({
          costOfCapital: costOfCapital,
          appreciation: appreciation,
          exitPoint: exitPoint
        })
    }

  return (
    
        <form onChange={projectionTerms} className='pnl-form'>

            
                <label className='pnl-label'
                    onMouseEnter={() => alert('This Is Basically What Your Money Do In An Alternative investment, In A Solid ETF The Average Would be 3.5% -5%')}
                    onMouseLeave={() => ""}
                > 
                    Cost Of Capital $
                </label>
                  <input 
                        className='pnl-input' 
                        type='number'
                        min={0} max={100} step={.25}
                        onChange={(e) => setCostOfCapital(parseFloat(e.target.value/100))}
                  />
          
         

            <label className='pnl-label'> Annual Appraisal %</label>
              <input 
                    className='pnl-input' 
                    type='number' 
                    min={0} max={20} step={0.25}
                    onChange={(e) => setAppreciation(parseFloat(e.target.value/100))}
              />


            <label className='pnl-label'> Exit Point</label>
             <input 
                    className='pnl-input' 
                    type='number' 
                    min={0}
                    onChange={(e) => setExitPoint(parseInt(e.target.value))}
              />

           
            

       

        </form>
 
  )
}

export default Projection;