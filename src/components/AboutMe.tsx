import React from 'react';
import styles from './css/AboutMe.module.css';


const AboutMe: React.FC = () => {
  const scrollToFirst = () => {
    document.getElementById('first')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSecond = () => {
    document.getElementById('second')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToThird = () => {
    document.getElementById('third')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFourth = () => {
    document.getElementById('fourth')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <h3>
    <h1 className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navRow}>
          <a href="#!" className={`${styles.logo} ${styles.active}`}>
            Danil <strong>«Dorley»</strong> Valiev
          </a>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <button className={styles.navListItemButton} onClick={scrollToFirst}>
                <a className={styles.link}>About me</a>
              </button>
            </li>
            <li className={styles.navListItem}>
              <button className={styles.navListItemButton} onClick={scrollToSecond}>
                <a className={styles.link}>Projects</a>
              </button>
            </li>
            <li className={styles.navListItem}>
              <button className={styles.navListItemButton} onClick={scrollToThird}>
                <a className={styles.link}>Skills</a>
              </button>
            </li>
            <li className={styles.navListItem}>
              <button className={styles.navListItemButton} onClick={scrollToFourth}>
                <a className={styles.link}>Contacts</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </h1>
    <h2 id="first" className={styles.header}>
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerTitle}>
        <strong>Hi, my name is <em style={{ color: '#00ffa1' }}> Danil </em></strong>
      </h1>
      <div className={styles.headerText}>
        <p>a 1st year student at Innopolis University</p>
        <p>and a beginner front-end developer</p>
      </div>
      <a className={styles.btn} onClick={scrollToSecond}>Scroll!</a>
    </div>
  </h2>
  </h3>
  );
};

export default AboutMe;
