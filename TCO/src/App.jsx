import "./App.css";
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className=" h-full">
        <Navbar></Navbar>
        <div className=" w-10/12 mx-auto">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/calculate"
              element={<Calculator></Calculator>}
            ></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
