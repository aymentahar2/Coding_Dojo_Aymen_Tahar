
import React from'react';
import './App.css';
import PersonCard from './components/component';




function App() {

  return (
    <div>
      <PersonCard firstName={"joe"} lastName={"bob"} age={"36"} hairColor={"black"} />
      <PersonCard firstName={"Smith"} lastName={"jk"} age={"88"} hairColor={"Red"} />
      <PersonCard firstName={"Filmore"} lastName={"Milaired"} age={"22"} hairColor={"brown"} />
      <PersonCard firstName={"jack"} lastName={"braul"} age={"55"} hairColor={"black"} />
      </div>
  );
}


export default App;
