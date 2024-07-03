import React from 'react';
import styles from './css/AboutMe.module.css';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="#" className="logo nav-list__link--active">Danil <strong>«Dorley» </strong> Valiev</a>
          <ul className="nav-list">
            <button className="nav-list__item" onClick={() => scrollToSection('first')}>About me</button>
            <button className="nav-list__item" onClick={() => scrollToSection('second')}>Projects</button>
            <button className="nav-list__item" onClick={() => scrollToSection('third')}>Skills</button>
            <button className="nav-list__item" onClick={() => scrollToSection('fourth')}>Contacts</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
