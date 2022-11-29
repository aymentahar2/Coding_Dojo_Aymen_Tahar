import './App.css';
import React, { useState } from 'react';
import Display from './components/display';
import Animal from './components/animal';
import Form from './components/newcomp';

function App() {
  // create state variable for this component
  const [animals, setAnimals] = useState([""]);

  const addAnimal = (newAnimal) => {
    console.log("Hello from app.js", newAnimal);
    //? antoher method to mutate the state (step by step)
    // 1. create a copy of state
    const copyAnimals = [...animals];
    // 2. push the newAnimal inside of the copyAnimal[]
    copyAnimals.push(newAnimal);
    // 3. call setAnimals and pass it the new array
    setAnimals(copyAnimals);
    //--------------------------------
    //? one method to mutate the state (short)
    // setAnimals([...animals, newAnimal]);
    // ---------------------------------

    // const addPeople = (newPerson) => {
    //   setPeople(newPerson);
    // }
  }
  return (
    <div className="App">
      <h1>lifting state</h1>

      { <Display animals={animals} /> }

      {<Form addAnimal={addAnimal} /> }

      {  // laternative way to display each animal
        animals.map((el, i) => {
          return <Animal el={el} key={i} />
        })
      }
      
    </div>
  );
}

export default App;