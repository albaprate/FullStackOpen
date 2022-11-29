import { useState } from "react";
import "./App.css"

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = all / 3;
  let positivePercent = good === 0 ? 0 : (good * 100) / all;

  if (
    (good === 0 || good === undefined) &&
    (neutral === 0 || neutral === undefined) &&
    (bad === 0 || bad === undefined)
  ) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <thead>
          <tr><th></th></tr>
          <tr><th></th></tr>
         
        </thead>
        <tbody>
          <tr>
          <StatisticLine text="good" value={good} />
          </tr>
          <tr>
          <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
          <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positivePercent}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => {
    setGood(good + 1);
  };

  const setToNeutral = () => {
    setNeutral(neutral + 1);
  };

  const setToBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={setToGood} text="good" />
      <Button handleClick={setToNeutral} text="neutral" />
      <Button handleClick={setToBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
