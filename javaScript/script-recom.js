// DECLARING API
let APIrecom = 'https://api.jikan.moe/v4/top/anime';

// FETCHING API
fetch(APIrecom)
.then(Response=>Response.json())
.then((animes)=>{
    const animeList = animes.data;
    let i = 0;
    animeList.map(anime=>{
        // CREATING ELEMENT
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');
        let link = document.createElement('a');
        let title = document.createElement('p');
        let rate = document.createElement('p');
        let score = document.createElement('p');
        let dur = document.createElement('p')
        let type = document.createElement('p');
        let genre = document.createElement('p');

        // SELECTING ELEMENT
        let recom = document.querySelectorAll('.content')[2];

        // FILLING ELEMENT
        img.src = anime.images.jpg.large_image_url;
        title.textContent = anime.title;
        rate.textContent = anime.score;

        // START CONDITIONING API
        // FILTERING WHICH DOESN'T HAVE SCORE
        if(anime.score == null || anime.score == undefined){
            rate.innerHTML = ' ';
            rate.textContent = '-';
        }
        // FILTERING WHICH DOESN'T HAVE DURATION
        dur.textContent = anime.duration;
        if(anime.duration == null || anime.duration == undefined || anime.duration == 'Unknown'){
            dur.innerHTML = ' ';
            dur.textContent = '-';
        }
        // END CONDITIONING API
        
        // FILLING INTO VARIABLE
        genre.textContent = anime.genres[0].name;
        type.textContent = anime.type;

        // FILLING VALUE INTO LINK A
        link.setAttribute('id', 'linkId');
        link.href = '../html/watch.html';

        // FILTERING WHICH DOESN'T HAVE VIDEO
        if(anime.trailer.embed_url != null && anime.mal_id != 41467){
            // APPENDING ELEMENT
            figure.appendChild(link);
            link.appendChild(img);
            figcaption.appendChild(title);
            figcaption.appendChild(dur);
            figcaption.appendChild(type);
            figcaption.appendChild(genre);
            link.appendChild(figcaption);
            recom.appendChild(figure);

            // FILLING INTO LOCAL STORAGE BY Event
            link.addEventListener('click', ()=>{
                localStorage.setItem('title', anime.title);
                localStorage.setItem('duration', anime.duration);

                // CONDITIONING
                // FILTERING WHICH DOESN'T HAVE SCORE AND DURATION
                if(anime.duration == null || anime.duration == undefined || anime.duration == 'Unknown'){
                    localStorage.setItem('duration', '-');
                }

                // FILLING INTO LOCAL STORAGE AND MAKING VARIABLE
                localStorage.setItem('type', anime.type);
                localStorage.setItem('genre', anime.genres[0].name);
                localStorage.setItem('jpg', anime.images.jpg.large_image_url);
                localStorage.setItem('link', anime.trailer.embed_url);
            });
        }
    })
})

