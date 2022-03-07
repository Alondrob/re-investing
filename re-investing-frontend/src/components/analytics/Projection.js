import React, { useState } from 'react'
import "./Analytics.css";

const Projection = ({ handleProjection}) => {
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
        <div className="income-div">

            <form onChange={projectionTerms} className="pnl-form">

                <label className="pnl-labl"> Cost Of Capital </label>
                <input
                    className='pnl-input'
                    type="number"
                    min={0} max={100} step={.25}
                    onChange={(e) => setCostOfCapital(parseFloat(e.target.value))}
                />

                <label className='pnl-label'> Annual Appraisal </label>
                <input
                    className='pnl-input'
                    type="number"
                    min={0} max={0} step={0.25}
                    onChange={(e) => setAppreciation(parseFloat(e.target.value))}
                />
                <label className='pnl-label'> Exit Point </label>
                <input
                    className='pnl-input'
                    type="number"
                    min={0}
                    onChange={(e) => setExitPoint(parseInt(e.target.value))}
                />

            </form>

        </div>
    )
}

export default Projection;