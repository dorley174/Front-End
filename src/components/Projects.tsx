import React from 'react';
import styles from './css/AboutMe.module.css';
import Mg from "../components/images/MG.jpg";
import GITCG from "../components/images/GITCGDT.jpg";
import EG from "../components/images/electgen.jpg";

const Projects: React.FC = () => (
  <section id="second">
    <main className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title1}>Projects</h2>
          <ul className={styles.projects}>
            <li className={styles.fake__project}>
              <img src="" className={styles.comic__img} alt="" />
              <h2 className={styles.project__title} id="comic__date">Wait, what is it?</h2>
              <h3 className={styles.project__description} id="comic__title">That project isn't mine. HAVE I BEEN HACKED?</h3>
              <button className={styles.btn__comic} id="fetch">DON'T CLICK ME</button>
            </li>

            <li className={styles.project}>
              <img src={EG} className={styles.project__img}  alt="Elective Gen" />
              <h4 className={styles.project__title}>Elective Gen</h4>
              <h5 className={styles.project__description}>Automatic placement of students from different courses into their chosen summer electives based on their GPA and personal priorities</h5>
              <a href="#!" className={styles.btn}>Soon</a>
            </li>

            <li className={styles.project}>
              <img src={GITCG} className={styles.project__img}  alt="Genshin Impact TCG DeckTracker" />
              <h4 className={styles.project__title}>Genshin Impact TCG DeckTracker</h4>
              <h5 className={styles.project__description}>An extension that allows you to track and save data from matches played in the Cat's Tail tavern. The matches will also develop a winning strategy.</h5>
              <a href="#!" className={styles.btn}>Soon</a>
            </li>

            <li className={styles.project}>
              <img src={Mg} className={styles.project__img}  alt="Mind Games" />
              <h4 className={styles.project__title}>Mind Games</h4>
              <h5 className={styles.project__description}>An indie game with different tasks and solutions in the same location, based on human ingenuity</h5>
              <a href="#!" className={styles.btn}>Unavailable</a>
          </li>
        </ul>
      </div>
    </main>
  </section>
);

export default Projects;
