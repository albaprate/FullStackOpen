import { useState } from "react";
import "./App.css";

const Title = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table>
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
          <StatisticLine text="all" value={all} />
        </tr>
        <tr>
          <StatisticLine text="average" value={average} />
        </tr>
        <tr>
          <StatisticLine text="positive" value={positive} />
        </tr>
      </table>
    </div>
  );
};
const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <>
          <td>{text}</td>
          <td>{value} %</td>
      </>
    );
  }
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
  const [all, setAll] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    const addGood = good + 1;
    setGood(addGood);
    calculateAverage(addGood, neutral, bad);
  };

  const handleNeutral = () => {
    const addNeutral = neutral + 1;
    setNeutral(addNeutral);
    calculateAverage(good, addNeutral, bad);
  };

  const handleBad = () => {
    const addBad = bad + 1;
    setBad(addBad);
    calculateAverage(good, neutral, addBad);
  };

  const calculateAverage = (goodAverage, NeutralAverage, BadAverage) => {
    const getAll = goodAverage + NeutralAverage + BadAverage;
    const getAverage = getAll / 3;

    const getPositive = (goodAverage * 100) / getAll;

    setAll(getAll);
    setAverage(getAverage);
    setPositive(getPositive);
  };

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Title text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
