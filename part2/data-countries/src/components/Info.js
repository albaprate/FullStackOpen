import React from 'react';
import Country from './Country';
import ListCountries from './ListCountries';
import Message from './Message';

const Info = ({countriesMatch, value, setShowCountry, showCountry }) => {

  if(value === '') {
    return(
      <Message text="Write a countrie's name"/>
    )
  }
  if(countriesMatch.length > 10){
    return (
      <Message text='Too many matches, specify another filter'/>
    )
  } else if (countriesMatch.length > 1 && countriesMatch.length <= 10 && !showCountry) {
    return (
      <ListCountries countriesMatch={countriesMatch} setShowCountry={setShowCountry}/>
    )
  } else if (countriesMatch.length === 1 ){
    return (
     <Country country={countriesMatch[0]}/>
    );
  }

  if (showCountry) {
    return (
      <Country country={showCountry} />
    )
  }
}

export default Info;
