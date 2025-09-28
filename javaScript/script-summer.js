// DECLARING API
let APIsummer = 'https://api.jikan.moe/v4/seasons/now';

// FETCHING API
fetch(APIsummer)
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
        let summer = document.querySelectorAll('.content')[0];

        // FILLING ELEMENT
        img.src = anime.images.jpg.large_image_url;
        title.textContent = anime.title;
        dur.textContent = anime.duration;
        // START CONDITIONING
    // FILTERING WHICH DOESN'T HAVE SCORE AND DURATION
        if(anime.duration == null || anime.duration == undefined || anime.duration == 'Unknown'){
            dur.innerHTML = ' ';
            dur.textContent = '-';
        }
        // END CONDITIONING

         // FILLING INTO ELEMENT
        genre.textContent = anime.genres[0].name;
        type.textContent = anime.type;

        // FILLING VALUE INTO LINK A
        link.setAttribute('id', 'linkId');
        link.href = '../html/watch.html';

        // FILLING LOCAL STORAGE
        // document.getElementById('linkId')

        // APPENDING ELEMENT
        // CONDITIONING TO BE 24 ELEMENTS
        if(anime.trailer.embed_url != null && anime.mal_id != 41467){
            figure.appendChild(link);
            link.appendChild(img);
            figcaption.appendChild(title);
            figcaption.appendChild(rate);
            figcaption.appendChild(dur);
            figcaption.appendChild(type);
            figcaption.appendChild(genre);
            link.appendChild(figcaption);
            summer.appendChild(figure);

            // FILLING INTO LOCAL STORAGE BY EVENT 
            link.addEventListener('click', ()=>{
                localStorage.setItem('title', anime.title);
                localStorage.setItem('duration', anime.duration);
                
                // START CONDITIONING
                // FILTERING WHICH DOESN'T HAVE SCORE AND DURATION
                if(anime.duration == null || anime.duration == undefined || anime.duration == 'Unknown'){
                    localStorage.setItem('duration', '-');
                }
                // END CONDITIONING

                // FILLING INTO LOCAL STORAGE
                localStorage.setItem('type', anime.type);
                localStorage.setItem('genre', anime.genres[0].name);
                localStorage.setItem('jpg', anime.images.jpg.large_image_url);
                localStorage.setItem('link', anime.trailer.embed_url);
            });
        }
    })
})

