<script>
    import Comic from './lib/Comic.svelte';

    import GITCGDT from './images/GITCGDT.jpg';
    import MG from './images/MG.jpg';
    import EG from './images/electgen.jpg';

    import Avatar from './images/photo.jpg';

    import VK from './images/vk.png';
    import YouTube from './images/youtube.png';
    import Steam from './images/steam.png';
    import GitHub from './images/steam.png';
    import Twitch from './images/twitch.png';
    import Pinterest from './images/pinterest.png';
    import Discord from './images/discord.png';
    import Telegram from './images/telegram.png';

    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<style> 
  @import './css/main.css';
  :global(*) {
    margin: 0;
  }

</style>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio</title>

<header>
  <h1 class="nav">
    <div class="container"> 
      <div class="nav-row">   
        <a href="#!" on:click|preventDefault={scrollIntoView} class="logo nav-list__link--active" style="color: white;">Danil <strong>«Dorley» </strong> Valiev</a>
    
        <ul class="nav-list">
          <a class="nav-list__item" on:click|preventDefault={scrollIntoView}> <a href='#s1' class="nav-list__link">About me</a> </a>
          <a class="nav-list__item" on:click|preventDefault={scrollIntoView}> <a href='#s2' class="nav-list__link">Projects</a> </a>
          <a class="nav-list__item" on:click|preventDefault={scrollIntoView}> <a href='#s3' class="nav-list__link">Skills</a> </a>
          <a class="nav-list__item" on:click|preventDefault={scrollIntoView}> <a href='#s4' class="nav-list__link">Contact me</a> </a>

        </ul>
      </div>
    </div>
  </h1>

  <h2 class="header" id="s1">   
    <div class="header_wrapper">
        <h3 class="header__title">
            <strong>Hi, my name is <em> <span style="color: #00ffa1"> Danil </span> </em></strong> <br>
            
        </h3> 
        <div class="header__text">
            <p>a 1st year student at Innopolis University</p> <br>
            <p>and a beginner front-end developer</p> <br>
        </div>
        <a class = "btn" href = "#s2" on:click|preventDefault={scrollIntoView}>Scroll!</a>
    </div>
</h2>
</header>

<body>
  <h3 id="s2">   
    <main class="section">
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
                        <a href="#!" class="btn"> Unavailable </a>
                    </li>
                </ul>
        </div>
    </main>
  </h3>

  <h8 id="s3" class="header3"> 
    <main class="section">
    <div class="container">
        <h2 class="title2">Skills</h2>
        
        <div class="page3-container">
            <div class="list-container">
                <ul class="skills">
                    <h7 class="skill"> <strong> <em> Programming language:</em> </strong>   <br> C++ <br> Java <br> Python </h7> 
                    <h7 class="skill"> <strong> <em>Language:</em></strong> <br> Russian <br> English <br> German</h7>
                    <h7 class="skill"> <strong> <em>Education:</em></strong> <br>
                        Liceum №148, Chelyabinsk, 2012-2016 <br>
                        Liceum №97, Chelyabinsk, 2017-2023 <br>
                        Innopolis University, Innopolis, 2023 - now 
                    </h7>
                    <h7 class="skill"> <strong> <em>Hobbies:</em></strong> <br> Gamedev <br> Design <br> Chess <br> Speedcubing </h7>
                </ul>
            </div>
            <div class="photo-container">
              <div class="container">
                <img src={Avatar} style="border-radius: 10px;" alt="avatar">
              </div>
              <div class="photo-text"> <em> <strong>«With great power comes great responsibility»</strong> </em> <br> Dorley translated as <br> <em> <strong>«With great photo-slider comes overdue dedline»</strong> </em></div>           
            </div>
          </div>
        </div>
    </main>
  </h8>

  <div id = "s4">
    <div class="footer">
        <a id="mail" href="mailto:d.valiev@innopolis.university" class="logo nav-list__link--active">d.valiev@innopolis.university</a>
          <div class="social-icons">
            <img class="social-icon" src={VK} alt="VK">
            <a href="https://www.youtube.com/channel/UCcvCAxRYOdrV-bnIE8otVTQ"><img class="social-icon" src={YouTube} alt="YouTube"></a>
            <a href="https://www.steamcommunity.com/id/Dorley74"><img class="social-icon" src={Steam} alt="Steam"></a>
            <a href="https://github.com/dorley174"><img class="social-icon" src={GitHub} alt="GitHub"></a>
            <a href="https://discordapp.com/users/579673615902179330"><img class="social-icon" src={Discord} alt="Discord"></a>
            <a href="https://telegram.org/dorley"><img class="social-icon" src={Telegram} alt="Telegram"></a> 
            <a href="https://twitch.tv/dorleyyyy"><img class="social-icon" src={Twitch} alt="twitch"></a>   
            <a href="https://ru.pinterest.com/Dorleyy/"><img class="social-icon" src={Pinterest} alt="Pinterest"></a>

            <!-- TBA socials:
            <i href="#"><img class="social-icon" src="./images/facebook.png" alt="Facebook"></i>
            <i href="#"><img class="social-icon" src="./images/tiktok.png" alt="TikTok"></i>
            <i href="#"><img class="social-icon" src="./images/i.png" alt="Instagram"></i>                
            <i href="#"><img class="social-icon" src="./images/X.png" alt="Twitter"></i>
            -->
                      
                         

        </div>
    </div>  
  </div>

</body>
