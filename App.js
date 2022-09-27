import { useState } from "react";
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "fundementals of react"
    "using props to pass data"
    "state of components"
     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const addVote = () => {
    const pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };
  const bestAnecdoteIndex = points.indexOf(Math.max(...points));
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} points</div>
      <Button handleClick={() => addVote()} text="vote" />
      <Button
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
        text="next anecdote"
      />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[bestAnecdoteIndex]}</div>
      <div>has {points[bestAnecdoteIndex]} votes</div>
    </div>
  );
};
export default App;
