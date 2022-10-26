import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import Home from './components/Home/Home';
import Piano from './components/Piano/Piano';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <div>
          <Navigation />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route
                path="/piano"
                element={<Piano />}
              />
              <Route 
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
