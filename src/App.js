import './App.css';

import React from 'react';

import Navigation from './components/Nav/Navigation';
import About from './components/About/About';
import Piano from './components/Piano/Piano';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Piano />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
