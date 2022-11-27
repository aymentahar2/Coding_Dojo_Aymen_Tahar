import React from 'react';
import './App.css';

import Test from './components/person';


function App() {

  const person = {
    items : [
      {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
      {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
      {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
      {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
    ]
  }
  return (
    <div className="App">
      {person.items.map(person => {
        return <Test persons={person} />
      })
      
      }

    </div>
  );
}

export default App;