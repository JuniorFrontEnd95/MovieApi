const add = document.querySelector('.add');
const products = document.querySelector('.movies');
const form = document.querySelector('form');



function search(){
form.addEventListener("submit", addMovies);
products.innerHTML= localStorage.getItem('myMovie');
}

function addMovies(event){
    
    event.preventDefault();

    let movieInput = document.getElementById("movieInput").value;
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fced3ba8' + "&t=" + movieInput, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {

       products.innerHTML += `
          <div class="movie">
             <img src="${data.Poster}" alt="Movie Poster" id="img">
             <p>Titlu: ${data.Title}</p>
             <p>An: ${data.Year}</p>
             <p>Nota ${data.imdbRating}</p>
             <p>Actori:${data.Actors}</p>
             <p>Descriere: ${data.Plot}</p>
          </div>
        `
   localStorage.setItem('myMovie', products.innerHTML);
        })
    }
    
search();