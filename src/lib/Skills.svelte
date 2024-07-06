<!-- lib/Skills.svelte -->
<script>
    import Avatar from '../images/photo.jpg';
  </script>
  
  <style>
    @import '../css/main.css';
  </style>
  
  <main class="section" id="s3">
    <div class="container">
      <h2 class="title2">Skills</h2>
      <div class="page3-container">
        <div class="list-container">
          <ul class="skills">
            <h7 class="skill"><strong><em>Programming language:</em></strong><br> C++ <br> Java <br> Python </h7>
            <h7 class="skill"><strong><em>Language:</em></strong><br> Russian <br> English <br> German</h7>
            <h7 class="skill"><strong><em>Education:</em></strong><br>
              Liceum №148, Chelyabinsk, 2012-2016 <br>
              Liceum №97, Chelyabinsk, 2017-2023 <br>
              Innopolis University, Innopolis, 2023 - now
            </h7>
            <h7 class="skill"><strong><em>Hobbies:</em></strong><br> Gamedev <br> Design <br> Chess <br> Speedcubing </h7>
          </ul>
        </div>
        <div class="photo-container">
          <div class="container">
            <img src={Avatar} style="border-radius: 10px;" alt="avatar">
          </div>
          <div class="photo-text"><em><strong>«With great power comes great responsibility»</strong></em><br> Dorley translated as <br><em><strong>«With great photo-slider comes overdue dedline»</strong></em></div>
        </div>
      </div>
    </div>
  </main>
  