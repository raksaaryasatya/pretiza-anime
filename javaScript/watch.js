// SELECTING ELEMENT
let container = document.querySelector('.container')

// add data to variable
let titlex = localStorage.getItem('title');
let ratex = localStorage.getItem('rate');
let durationx = localStorage.getItem('duration');
let typex = localStorage.getItem('type');
let genrex = localStorage.getItem('genre');
let jpg = localStorage.getItem('jpg');
let link = localStorage.getItem('link');

// MAKING ELEMENT
let iframe = document.createElement('iframe');
let img = document.createElement('img');
let figcaption = document.createElement('figcaption');
let title = document.createElement('h1');
let rate = document.createElement('p');
let duration = document.createElement('p')
let type = document.createElement('span');
let genre = document.createElement('span');
let detail = document.createElement('div');

// FILLING VALUE 
iframe.setAttribute('allow', 'fullscreen');

// FILLING CLASS TO DIV
detail.classList.add('detail');

// FILLING INTO ELEMENT
title.textContent = titlex;
type.textContent = typex;
genre.textContent = genrex + ' | ';
rate.textContent = ratex;
duration.textContent = durationx;
img.src = jpg;
iframe.src = link;



// APPENDING 
figcaption.appendChild(title);
figcaption.appendChild(genre);
figcaption.appendChild(type);
figcaption.appendChild(duration);
figcaption.appendChild(rate);   

detail.appendChild(img);
detail.appendChild(figcaption);

container.appendChild(iframe);
container.appendChild(detail);


