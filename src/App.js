import React, { useState } from "react";
import Dice from "./Dice.js";

function roll(sides = 6) {
  return Math.floor(Math.random() * (sides - 1)) + 1;
}

function App() {
  const [rolledNumbers, setRolledNumbers] = useState([]);
  return (
    <div>
      <button
        onClick={(e) => {
          setRolledNumbers([...rolledNumbers, roll()]);
        }}
      >
        Add Dice
      </button>
      {rolledNumbers.map((number, index) => (
        <Dice key={index} number={number} />
      ))}
      <button
        onClick={() => {
          const newRolledNumbers = rolledNumbers.map((number) => roll());
          setRolledNumbers(newRolledNumbers);
        }}
      >
        Roll
      </button>
      <div>
        Total:{" "}
        {rolledNumbers.reduce((total, number) => {
          return total + number;
        }, 0)}
      </div>
    </div>
  );
}

export default App;
