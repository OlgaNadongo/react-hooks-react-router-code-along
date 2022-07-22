import React from "react";
import {Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Navbar from "./Navbar";

 // edit the Routes
function App(){

     
    return (
        <div>
           
           <Navbar  />
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/login" element={<Login />} />  
            </Routes>
           
        </div>
    )
}

export default App