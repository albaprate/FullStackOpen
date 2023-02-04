import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState(
    [{ name: "Arto Hellas" }] 
  );
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("")
  const [showAll, setShowAll] = useState(true)

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  const addPerson = (event) => {
    event.preventDefault();

    let exists = persons.filter((p) => {
      return p.name === newName;
    });

    if (exists.length === 0) {
      const p = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
     
      };
      setPersons(persons.concat(p));
      setNewName("");
      setNewNumber("");
      setShowAll(true)
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const peopleToShow = showAll
    ? persons
    : persons.filter( (p) => p.name.indexOf(newFilter) > -1)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={handleFilterChange}></input>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {peopleToShow.map((p) => (
          <li key={p.name}>{p.name} {p.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
