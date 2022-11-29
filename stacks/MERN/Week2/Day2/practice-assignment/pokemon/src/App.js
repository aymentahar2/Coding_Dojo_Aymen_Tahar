import './App.css';
import { useState } from 'react';

function App() {

  const [pok, setPok] = useState([]);

  const fetchPok = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(someResponse => {
        return someResponse.json()
      })
      .then(apiData => {
        console.log(apiData);
        setPok(apiData.results);
      })
      .catch(someError => {
        console.log(someError)
      })
  }

  return (
    <div className="App">
      <div className='container mt-5'>
        <h1> Pokemon API </h1>
        <hr />
        <button className='btn btn-outline-dark shadow p-3 mb-5 rounded' onClick={fetchPok}>Fetch Pokemon </button>
        <hr />
        <br />
   
        {pok.map((pk, idx) => {
              return (
                <ul>
                <li key={idx} >{pk.name}</li>
                </ul>
               
              )
            })}
       

      </div>
    </div>
  );
}

export default App;