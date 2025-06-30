import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Loader from "./Components/Loader";
import Mandatory from "./Components/Mandatory";
import Nav from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import DocumentViewer from "./pages/DocumentViewer";
import Home from "./pages/Home";
import NotFound from './Components/ErrorPage'

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mandatory" element={<Mandatory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:docId" element={<DocumentViewer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
