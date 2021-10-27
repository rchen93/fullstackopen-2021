import React, { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Anecdote = ({ text, count }) => (
  <div>
    <p>{text}</p>
    <p>has {count} votes</p>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const PopularAnecdote = ({ anecdotes, allVotes }) => {
  const highestVote = Math.max(...allVotes);
  const idx = allVotes.indexOf(highestVote);
  const popular = anecdotes[idx];
  if (highestVote === 0) {
    return <p>No votes given</p>;
  }

  return (
    <div>
      <p>{popular}</p>
      <p>has {highestVote} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(6).fill(0));

  const handleVoteClick = () => {
    const allVotesCopy = [...allVotes];
    allVotesCopy[selected] += 1;
    setAllVotes(allVotesCopy);
  };

  const handleAnecdoteClick = () => {
    const idx = Math.floor(Math.random() * anecdotes.length);
    setSelected(idx);
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} count={allVotes[selected]} />
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleAnecdoteClick} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <PopularAnecdote anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );
};

export default App;
