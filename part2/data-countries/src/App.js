import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './components/Info';

const AppApiCountries = () => {
  const [value, setValue] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [showCountry, setShowCountry] = useState(null)
  
  useEffect(() => {
      axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
       setAllCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value)
    setShowCountry(null)
  }
  const countriesMatch = allCountries.filter((c) => {
    return c.name.common.toLowerCase().includes(value.toLowerCase()) 
  }); 

  return (
    <div class='row'>
      <div class='column'>
        <h2 className='formTitle'>Form</h2>
      <form> 
        Find countries <input value={value} onChange={handleChange}></input>
      </form>
        <Info countriesMatch={countriesMatch} value={value} setShowCountry={setShowCountry} showCountry={showCountry}></Info> 
      </div>
    </div>
  );
}

export default AppApiCountries;

