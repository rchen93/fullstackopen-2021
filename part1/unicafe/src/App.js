import React, { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatItem = ({ text, count }) => (
  <p>
    {text} {count}
  </p>
);
const Stats = ({ allGood, allNeutral, allBad }) => {
  return (
    <div>
      <StatItem text="good" count={allGood} />
      <StatItem text="neutral" count={allNeutral} />
      <StatItem text="bad" count={allBad} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allGood, setAllGood] = useState(0);
  const [allNeutral, setAllNeutral] = useState(0);
  const [allBad, setAllBad] = useState(0);

  const handleGoodClick = () => {
    setAllGood(allGood + 1);
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAllNeutral(allNeutral + 1);
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAllBad(allBad + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <Stats allGood={allGood} allNeutral={allNeutral} allBad={allBad} />
    </div>
  );
};

export default App;
