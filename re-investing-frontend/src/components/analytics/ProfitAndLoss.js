import React, {useState} from 'react'
import Loan from './Loan';
import CashOnCash from './CashOnCash';
import Irr from './Irr';
import Income from './Income';
import Projection from './Projection';


function ProfitAndLoss({price}) {
    console.log(price)
    const [income, setIncome] = useState({});
    const [loan, setLoan] = useState({});
    const [projection, setProjection] = useState({})

    const handleIncome = (incomeObj) => {
        console.log('piski')
        setIncome(incomeObj)
    }
    const handleLoan = (loanObj) => {
        console.log('piski')
        setLoan(loanObj)
    }
    const handleProjection = (projectionObj) => {
        console.log('piski')
        setProjection(projectionObj)
    }

    console.log('income:', income, 'loan', loan)
  return (
    <div>ProfitAndLoss
        <Income handleIncome={handleIncome} />
        <Loan handleLoan={handleLoan} />
        <Projection handleProjection={handleProjection} />
    </div>
  )
}

export default ProfitAndLoss