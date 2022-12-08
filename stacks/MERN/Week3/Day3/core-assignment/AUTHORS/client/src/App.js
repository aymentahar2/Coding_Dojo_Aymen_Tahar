import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import AddAuthor from "./components/AddAuthor";
import UpdateAuthor from "./components/UpdateAuthor";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <Routes>
        ///--------------------allAuthors--------------------
        <Route path="/" element={<Main />} />
        //-------------------ADD-----
        <Route path="/add" element={<AddAuthor />} />
        /-------------------update-----
        <Route path="/update/:id" element={<UpdateAuthor />} />
        /-------------------details-----
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
