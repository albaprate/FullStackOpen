
import {useState} from 'react'


const Button = ({onClick, text}) => {
  return (
    <div>
          <button onClick={onClick}>{text}</button>
    </div>

  )
}

const Title = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const points = new Uint8Array(anecdotes.length)
  const copy = [...points]
  const [selected, setSelected] = useState(0)
  const [largest, setLargest] = useState(0)
  const [arrayVotes, setArrayVotes] = useState(copy)


  const handleVote = () => {
    const newArrayVotes = [...arrayVotes]
    newArrayVotes[selected] += 1
    setArrayVotes(newArrayVotes)
    console.log(newArrayVotes)
    mostVotes(newArrayVotes)
  }

  const handleOnClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  const mostVotes = (votes) => {
    let highest = 0
    for(let i = 0; i < votes.length; i++){
      if(votes[i] > highest){
        highest = votes[i]
        setLargest(i)
      }
    }
    
  }

  return (
    <div>
      <Title text='Anecdote of the day'></Title>
     <p>{anecdotes[selected]}</p>
     <p>has {arrayVotes[selected]} votes</p>
     <Button onClick={handleVote} text='vote'></Button>
     <Button onClick={handleOnClick} text='next anecdote'></Button>
     <Title text='Anecdote with most votes'></Title>
     <p>{anecdotes[largest]}</p>
     <p>has {arrayVotes[largest]} votes</p>

    </div>
  )
}

export default App;
