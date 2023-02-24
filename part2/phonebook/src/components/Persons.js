import personService from '../services/persons'

const Persons = ({persons, newFilter, setPersons}) => {

  const personsToShow = persons.filter(p => {
    const person = p.name.toLowerCase().includes(newFilter.toLowerCase())
    return person
  })

  const handleDelete = (id) => {
    const personToDelete = persons.filter((p) => p.id === id)
    const name = personToDelete[0].name
    if (window.confirm(`Delete ${name} ?`)){
      personService
      .remove(id)
      setPersons(persons.filter((p) => p.id !== id))
    }
  }

  return (
    <ul>
    {personsToShow.map((p) => (
      <>
      <li key={p.name}>{p.name} {p.number}
      <button onClick={() => handleDelete(p.id)}>delete</button>
      </li>
      </>
    ))}
  </ul>
  )
}

export default Persons;