import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
    <h1>Routing Practice</h1>
    <Routes>
    <Route path='/home' element={<Home/>}/>
   
		<Route path="/:wordNumber" element={<Hello/>}/>
		<Route path="/:wordNumber/:fontColor/:backgroundColor" element={<Hello/>} />
    
    </Routes>
  
    </div>
  );
}

export default App;
