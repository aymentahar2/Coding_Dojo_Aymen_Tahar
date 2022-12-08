import Form from './components/Form';
import './App.css';
import {Router, BrowserRouter } from 'react-router-dom'; 
import CompPeople from './components/compPeople';
import CompPlanet from './components/compPlanet';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <h1>Luke APIWALKER</h1>
    <Form />
    <Router path="/people/:id">
    <CompPeople />
    </Router>
    <Router path="/planet/:id">

    <CompPlanet />

    </Router>
    

    </BrowserRouter>
  
     
    </div>
  );
}

export default App;
