import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {

  const [isLoggenIn ,setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggenIn ={isLoggenIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login isLoggenIn={isLoggenIn} setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>


  );
}

export default App;
