<!-- lib/Projects.svelte -->
<script>
    import Comic from './Comic.svelte';
    import GITCGDT from '../images/GITCGDT.jpg';
    import MG from '../images/MG.jpg';
    import EG from '../images/electgen.jpg';
  </script>
  
  <style>
    @import '../css/main.css';
  </style>
  
  <main class="section" id="s2">
    <div class="container">
      <h2 class="title1">Projects</h2>
      <ul class="projects">
        <li class="fake__project">
          <Comic />
        </li>
        <li class="project">
          <img src={EG} class="project__img" style="object-fit: cover; width: 100%;">
          <h4 class="project__title">Elective Gen</h4>
          <h5 class="project__description">Automatic placement of students from different courses into their chosen summer electives based on their GPA and personal priorities</h5>
          <a href="#!" class="btn">Soon</a>
        </li>
        <li class="project">
          <img src={GITCGDT} class="project__img" style="object-fit: cover; width: 100%;">
          <h4 class="project__title">Genshin Impact TCG DeckTracker</h4>
          <h5 class="project__description">An extension that allows you to track and save data from matches played in the Cat's Tail tavern. The matches will also develop a winning strategy.</h5>
          <a href="#!" class="btn">Soon</a>
        </li>
        <li class="project">
          <img src={MG} class="project__img" style="object-fit: cover; width: 100%;">
          <h4 class="project__title">Mind Games</h4>
          <h5 class="project__description">An indie game with different tasks and solutions in the same location, based on human ingenuity</h5>
          <a href="#!" class="btn">Unavailable</a>
        </li>
      </ul>
    </div>
  </main>
  