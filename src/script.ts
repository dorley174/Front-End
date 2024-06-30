import { formatDistanceToNow } from 'date-fns';

interface ComicData {
  img: string;
  title: string;
  year: number;
  month: number;
  day: number;
}

const Fetch = document.getElementById('fetch') as HTMLButtonElement;
Fetch.addEventListener('click', async () => {
  const email: string = 'd.valiev@innopolis.university'; // mail
  const Image = document.getElementById('comic__img') as HTMLImageElement; // image src
  const Title = document.getElementById('comic__title') as HTMLElement; // title src
  const comic__date = document.getElementById('comic__date') as HTMLElement; // post date

  const param__resp = new URLSearchParams({ email }); // search by email to get id
  const response = await fetch(`https://fwd.innopolis.university/api/hw2?${param__resp}`); // response
  const id: string = await response.text(); // convert in id

  const param__comic = new URLSearchParams({ id }); // find by id to find needed comic
  const comic__resp = await fetch(`https://fwd.innopolis.university/api/comic?${param__comic}`); // response
  const data: ComicData = await comic__resp.json(); // finally found

  Image.src = data.img; // place comic
  Title.textContent = data.title; // place title

  const postDate = new Date(data.year, data.month - 1, data.day);
  comic__date.textContent = `Post date: ${postDate.toLocaleDateString()} (${formatDistanceToNow(postDate)} ago)`; // upload post date with relative time
});
