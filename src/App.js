import React from "react";
import GlobalStyle from "./GlobalStyle";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;