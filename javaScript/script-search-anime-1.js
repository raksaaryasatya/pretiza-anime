// SELECT ELEMENT
let search = document.getElementById('search-engine');
    // EVENT WHEN IT'S CLICKED
    search.addEventListener("submit", (e)=>{
        let input = document.getElementById('engine');
        // CONDITIONING WHEN IT EMPTY
        if(input.value == ''){
            e.preventDefault();
        }

        // CONDITIONING WHEN IT'S EXIST
        else{
            localStorage.setItem('input-anime',input.value);
        }
});



