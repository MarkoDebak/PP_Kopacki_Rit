import "./styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Logo from "./Images/logo.png";
import Login from "./Components/Login";
import Galery from "./Components/Galery";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Header from "./Components/Header";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/galery" Component={Galery}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/footer" Component={Footer}></Route>
        </Routes>
      </Router>
    </div>
  );
}
