import './App.css';
import React, { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';import Home from './components/Home';
import About from './components/About';
import Community from './components/Community';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/community' element={<Community/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
    </div>
  );
}

export default App;
