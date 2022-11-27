import React from 'react';
import './App.css';

import PersonComponent from './components/newcomp';
var personns =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},

]

function App() {
  return (
    <div className="App">

      {personns.map(person => {
        return <PersonComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })
      
      }
      </div>
  );
}

export default App;