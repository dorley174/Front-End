import React from 'react';
import styles from './css/AboutMe.module.css';
import avatar from "../components/images/photo.jpg";

const Skills: React.FC = () => (
  <section id="third" className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.title2}>Skills</h2>
      <div className={styles.page3Container}>
        <div className={styles.listContainer}>
          <ul className={styles.skills}>
            <li className={styles.skill}><strong><em>Programming language:</em></strong><br />C++<br />Java<br />Python</li>
            <li className={styles.skill}><strong><em>Language:</em></strong><br />Russian<br />English<br />German</li>
            <li className={styles.skill}><strong><em>Education:</em></strong><br />Liceum №148, Chelyabinsk, 2012-2016<br />Liceum №97, Chelyabinsk, 2017-2023<br />Innopolis University, Innopolis, 2023 - now</li>
            <li className={styles.skill}><strong><em>Hobbies:</em></strong><br />Gamedev<br />Design<br />Chess<br />Speedcubing</li>
          </ul>
        </div>
        <div className={styles.photoContainer}>
          <div className={styles.container}>
            <img src={avatar} className={styles.avatar} alt="avatar" />
          </div>
          <div className={styles.photoText}><em><strong>«With great power comes great responsibility»</strong></em><br />Dorley translated as<br /><em><strong>«With great photo-slider comes overdue dedline»</strong></em></div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
