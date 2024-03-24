import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import IncrementDecrement from "./IncrementDecrement";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = (e) => {
    console.log("Add Animal Button is clicked!!!", e);
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <div className="app">
        <h3>Increment, Decrement & Clear Numbers</h3>
        <IncrementDecrement />
      </div>
      <hr />
      <div className="app">
        <h3>Increment, Decrement & Clear Arrays</h3>
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list"> {renderedAnimals} </div>
      </div>
    </div>
  );
}

export default App;
