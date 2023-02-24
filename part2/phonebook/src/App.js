import { useState, useEffect } from "react";
import personService from "./services/persons";

import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("")

  useEffect(() => {
   personService
   .getAll()
   .then(response => setPersons(response))
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    let exists = persons.filter((p) => p.name === newName)

    if (exists.length !== 0 && newNumber !== ''){
      if (window.confirm(` ${newName} is already added to phonebook, replace the old number with a new one?`)){
      const changedPerson = {...exists[0], number: newNumber}
      personService
      .update(exists[0].id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(p => p.id !== exists[0].id ? p : returnedPerson ))
      })
    }
    }

    if (exists.length === 0 && newNumber !== '') {
      const p = {
        name: newName,
        number: newNumber
      };

      personService
      .create(p)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName("");
        setNewNumber("");
      })

    } else {
      alert(`${newName} is already added to phonebook, choose another name`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm 
      onSubmit={addPerson}
      nameValue={newName}
      nameChange={handleNameChange}
      numberValue = {newNumber}
      numberChange={handleNumberChange}
      ></PersonForm>
  
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons}/>
    </div>
  );
};

export default App;
