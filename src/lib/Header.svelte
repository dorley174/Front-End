<!-- lib/Header.svelte -->
<script>
    function scrollIntoView({ target }) {
      const el = document.querySelector(target.getAttribute('href'));
      if (!el) return;
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  </script>
  
  <style>
    @import '../css/main.css';
  </style>
  
  <header>
    <h1 class="nav">
      <div class="container">
        <div class="nav-row">
          <a href="#!" on:click|preventDefault={scrollIntoView} class="logo nav-list__link--active" style="color: white;">Danil <strong>«Dorley» </strong> Valiev</a>
          <ul class="nav-list">
            <a class="nav-list__item" on:click|preventDefault={scrollIntoView}><a href='#s1' class="nav-list__link">About me</a></a>
            <a class="nav-list__item" on:click|preventDefault={scrollIntoView}><a href='#s2' class="nav-list__link">Projects</a></a>
            <a class="nav-list__item" on:click|preventDefault={scrollIntoView}><a href='#s3' class="nav-list__link">Skills</a></a>
            <a class="nav-list__item" on:click|preventDefault={scrollIntoView}><a href='#s4' class="nav-list__link">Contact me</a></a>
          </ul>
        </div>
      </div>
    </h1>
    <h2 class="header" id="s1">
      <div class="header_wrapper">
        <h3 class="header__title">
          <strong>Hi, my name is <em><span style="color: #00ffa1"> Danil </span></em></strong><br>
        </h3>
        <div class="header__text">
          <p>a 1st year student at Innopolis University</p><br>
          <p>and a beginner front-end developer</p><br>
        </div>
        <a class="btn" href="#s2" on:click|preventDefault={scrollIntoView}>Scroll!</a>
      </div>
    </h2>
  </header>
  