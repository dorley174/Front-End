import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <AboutMe />
    <Projects />
    <Skills />
    <Footer />
  </div>
);

export default App;
