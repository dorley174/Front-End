const Fetch = document.getElementById('fetch');
Fetch.addEventListener('click', async () => {
    const email = 'd.valiev@innopolis.university'; //mail
    const Image = document.getElementById('comic__img'); //image src
    const Title = document.getElementById('comic__title'); //title src

    const param__resp = new URLSearchParams({ email }); //search by email to get id
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${param__resp}`); //response
    const id = await response.text(); //convert in id

    const param__comic = new URLSearchParams({id}); //find by id to fing needed comic
    const comic__resp = await fetch(`https://fwd.innopolis.university/api/comic?${param__comic}`); //response
    const data = await comic__resp.json(); //finally found

    Image.src = data.img; //place comic
    Title.textContent = data.title; //place title

    comic__date.textContent = `Post date: ${new Date(data.year, data.month, data.day).toLocaleDateString()}`; //upload post date 
});
