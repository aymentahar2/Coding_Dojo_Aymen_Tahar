import Tab from './components/Tab';
import './App.css';



function App() {
  const tab1=["Hello from Tab 1"];
  const tab2=["Hello from Tab 2"];
  const tab3=["hello from Tab 3"];
  
  return (
    <div className="App">

      <Tab tab1={tab1} tab2={tab2} tab3={tab3}/>
    </div>
  );
}

export default App;