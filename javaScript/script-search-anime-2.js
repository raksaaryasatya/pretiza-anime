// AMBIL DATA LOCAL STORAGE
let keyword = localStorage.getItem('input-anime');
console.log(keyword);

// ISI JUDUL 
let result = document.querySelector('h1');
result.textContent = `Hasil Pencarian Keyword '${keyword}'`;

// MAKING VARIABLE
APIsearch = `https://api.jikan.moe/v4/anime?q=${keyword}&limit=20`;

// FETCHING API
fetch(APIsearch)
.then(Response=>Response.json())
.then((animes)=>{
    // MAKING VARIBLE TO HELP FETCHING API
    const animeList = animes.data;
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
    let searchContent = document.querySelector('.container');

    // FILLING INTO ELEMENT
    img.src = anime.images.jpg.large_image_url;
    title.textContent = anime.title;
    rate.textContent = anime.score;

    // START CONDITIONING
    // FILTERING WHICH DOESN'T HAVE SCORE AND DURATION
    if(anime.score == null || anime.score == undefined){
        rate.innerHTML = ' ';
        rate.textContent = '-';
    }
    dur.textContent = anime.duration;
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
        searchContent.appendChild(figure);

        // FILLING INTO LOCAL STORAGE BY EVENT 
        link.addEventListener('click', ()=>{
            localStorage.setItem('title', anime.title);
            localStorage.setItem('rate', anime.score);

            // START CONDITIONING
            // FILTERING WHICH DOESN'T HAVE SCORE AND DURATION
            if(anime.score == null || anime.score == undefined){
                localStorage.setItem('rate', '-');
            }
            localStorage.setItem('duration', anime.duration);
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

