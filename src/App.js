import logo from './logo.svg';
import './App.css';
import "./style.css";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from "./components/Home";
import Header from './components/Header';
import ScrollTop from './ScrollTop';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
