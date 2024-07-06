import React from 'react';
import Link from 'next/link';

const Projects: React.FC = () => {
  return (
    <h2 id="second">
      <main className="section">
        <div className="container">
          <h2 className="title1">Projects</h2>
          <ul className="projects">


            <li className="fake__project">
              <img src="" id="comic__img" alt="" />
              <h2 id="comic__date" className="project__title">
                Wait, what is it?
              </h2>
              <h3 id="comic__title" className="project__description">
                That project is not mine. HAVE I BEEN HACKED?
              </h3>
              <Link  id="fetch" className="btn__comic" href="/comic">
                <button>Wanna see a comic?</button>
              </Link>
              
            </li>

            <li className="project">
              <img className="project__img" src="./images/electgen.jpg" alt="" />
              <h4 className="project__title">Elective Gen</h4>
              <h5 className="project__description">
                Automatic placement of students from different courses into
                their chosen summer electives based on their GPA and personal
                priorities
              </h5>
              <a href="#!" className="btn">
                Soon
              </a>
            </li>

            <li className="project">
              <img className="project__img" src="./images/GITCGDT.jpg" alt="" />
              <h4 className="project__title">Genshin Impact TCG DeckTracker</h4>
              <h5 className="project__description">
                An extension that allows you to track and save data from matches
                played in the Cats Tail tavern. The matches will also develop a
                winning strategy.
              </h5>
              <a href="#!" className="btn">
                Soon
              </a>
            </li>

            <li className="project">
              <img className="project__img" src="./images/MG.jpg" alt="" />
              <h4 className="project__title">Mind Games</h4>
              <h5 className="project__description">
                An indie game with different tasks and solutions in the same
                location, based on human ingenuity
              </h5>
              <a href="#!" className="btn">
                Unavailable
              </a>
            </li>
          </ul>
        </div>
      </main>
    </h2>
  );
};

export default Projects;
