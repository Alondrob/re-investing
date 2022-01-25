import React, {useEffect, useState} from 'react';
import {states} from '../utils/states'
import SelectedState from './SelectedState';

const  PropertySearch = () => {

  const [selectedState, setSelectedState] = useState('')

let abbrevation = (selectedState.toUpperCase().slice(0,2))

  return (
          <div>
            <select onChange={(e) => setSelectedState(e.target.value)} value={selectedState}>
            {states.map((state, i) => <option> {state.abbreviation}--{state.name}</option> )}   
            </select>
            <SelectedState abbrevation={abbrevation}/>
          </div>
  )
}

export default PropertySearch;
