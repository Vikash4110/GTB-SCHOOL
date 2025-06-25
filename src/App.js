import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Nav from './Components/Navbar';
import Home from './pages/Home';
import About from './Components/About';
import Academics from './Components/Academics';
import Admissions from "./Components/Admissions";
import Mandatory from "./Components/Mandatory";
import Faculty from "./Components/Faculty";
import Students from "./Components/Students";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Loader from './Components/Loader'
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setIsLoading(true); 
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 2500); 

      return () => clearTimeout(timer); 
    }
  }, []);
  return (
    <>
    {isLoading && <Loader />}
      <div className={`${isLoading ? "hidden" : "block"}`}>
      <Nav />
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mandatory" element={<Mandatory />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/students" element={<Students />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      
      
    </>
  );
};

export default App;
