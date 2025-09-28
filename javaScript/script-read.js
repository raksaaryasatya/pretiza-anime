// DECLARING API
let APIrecom = 'https://api.jikan.moe/v4/manga';

// FETCHING API
fetch(APIrecom)
.then(Response=>Response.json())
.then((animes)=>{
    const animeList = animes.data;
    animeList.map(anime=>{
        // CREATING ELEMENT
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');
        let link = document.createElement('a');
        let title = document.createElement('p');
        let rate = document.createElement('p');
        let card = document.createElement('div');
        let cardContent = document.createElement('div');

        // SELECTING ELEMENT
        let content = document.querySelector('.content');

        // FILLING ELEMENT
        img.src = anime.images.jpg.large_image_url;
        title.textContent = anime.title;
        rate.textContent = anime.score;
        if(anime.score == null || anime.score == undefined){
            rate.innerHTML = ' ';
            rate.textContent = '-';
        }

        // FILLING VALUE INTO LINK A
        link.href = anime.url;

        // APPENDING ELEMENT
            figure.appendChild(link);
            link.appendChild(img);
            figcaption.appendChild(title);
            figcaption.appendChild(rate);
            link.appendChild(figcaption);
            content.appendChild(figure);
    })
})

