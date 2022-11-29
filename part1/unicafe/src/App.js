import {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad
  let average = all / 3
  let positivePercent = good === 0 ? 0 : (good * 100) / all

  if((good === 0 || good === undefined) && (neutral === 0 || neutral === undefined) && (bad === 0 || bad === undefined)) {
    return(
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p> 
      </div>
    
    )
  }
  return(
    <div>
        <h2>statistics</h2>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
       {/*  <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p> */}
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positivePercent}%</p>
    </div>
  
  )
}

const StatisticLine = ({text,value}) => {
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const setToGood = () => {
    setGood(good + 1)
    
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
    
  }

  const setToBad = () => {
    setBad(bad + 1)
    
  }


  
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={setToGood} text="good"/>
      <Button handleClick={setToNeutral} text="neutral"/>
      <Button handleClick={setToBad} text="bad"/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}



export default App;
