import './App.css';
import React, { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';import Home from './components/Home';
import Ayurveda from './components/Ayurveda';
import Expert from './components/Expert';
import Community from './components/Community';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ayurveda" element={<Ayurveda/>} />
      <Route path='/experts' element={<Expert/>} />
      <Route path='/community' element={<Community/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
