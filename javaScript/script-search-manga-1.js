// SELECT ELEMENT
let searchManga = document.getElementById('search-engine-manga');
    // EVENT WHEN IT'S CLICKED
    searchManga.addEventListener("submit", (e)=>{
        let input = document.getElementById('engine-manga');
        // CONDITIONING WHEN IT EMPTYz
        if(input.value == ''){
            e.preventDefault();
        }
        // CONDITIONING WHEN IT'S EXIST
        else{
            localStorage.setItem('input-manga',input.value);
        }
});
