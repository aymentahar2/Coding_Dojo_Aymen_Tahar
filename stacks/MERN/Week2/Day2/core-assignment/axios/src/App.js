import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [pok, setPok] = useState([]);

  const axiospok= () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(res => {
        console.log("✅",res);
        setPok(res.data.results);
      })
      .catch(err => {
        console.log("❌", err);
      })
  }

  return (
    <div className="App">
      <div className='container mt-5'>
        <h1> Axios API </h1>
        <hr />
        <button className='btn btn-outline-danger shadow p-3 mb-5 rounded ms-3' onClick={axiospok}>Axios 🚀</button>
        <hr />
        <br />
        <div>
      
        {pok.map((pek,index) => {
          return (
            <li key={index}>{pek.name}</li>
          )
        })}
       
        
        </div>
     
      </div>
    </div>
  );
}

export default App;