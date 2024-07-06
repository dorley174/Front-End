<!-- Comic.svelte -->

<script>
  import { onMount } from 'svelte';
  import { formatDistanceToNow } from 'date-fns';

  let comicData = {};

  onMount(async () => {
    const Fetch = document.getElementById('fetch');
    const Image = document.getElementById('comic__img');
    const Title = document.getElementById('comic__title');
    const comicDate = document.getElementById('comic__date');

    Fetch.addEventListener('click', async () => {
      const email = 'd.valiev@innopolis.university';

      const paramResp = new URLSearchParams({ email });
      const response = await fetch(`https://fwd.innopolis.university/api/hw2?${paramResp}`);
      const id = await response.text();

      const paramComic = new URLSearchParams({ id });
      const comicResp = await fetch(`https://fwd.innopolis.university/api/comic?${paramComic}`);
      const data = await comicResp.json();

      Image.src = data.img;
      Title.textContent = data.title;

      const postDate = new Date(data.year, data.month - 1, data.day);
      comicDate.textContent = `Post date: ${postDate.toLocaleDateString()} (${formatDistanceToNow(postDate)} ago)`;

      // Update project title and description
      document.querySelector('.project__title').textContent = `Post date: ${postDate.toLocaleDateString()}`;
      document.querySelector('.project__description').textContent = data.title;
    });
  });
</script>


<img id="comic__img" style="object-fit: cover; width: 100%;" alt="">
<h2 id="comic__date" class="comic__title">Wait, what is it?</h2>
<h3 id="comic__title" class="comic__description">That project isn't mine. HAVE I BEEN HACKED?</h3>
<button id="fetch" style="margin-bottom: 10px;
    display: inline-block;
    height: 48px;
    padding: 12px 28px;
    border-radius: 5px;
    background-color: #ff005e;
    font-style: italic;
    color:black;
    
    letter-spacing: 0.15px;
    font-weight: 500; border-box:0px" class="btn__comic">Fetch Comic</button>
