import React from 'react';
import '../css/main.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
