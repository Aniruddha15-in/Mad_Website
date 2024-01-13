import Navbar from "./components/Navbar";
import {Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Accolades from "./pages/Accolades"; 
import Artists from "./pages/Artists";
import About from "./pages/About";
import Doremipa from "./pages/Doremipa";
import Events from "./pages/Events";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Doremipa />
    </div>

  );
}

export default App;
