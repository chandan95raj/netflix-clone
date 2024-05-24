import MOVIESERVICE from "../services/movieService.js";

window.addEventListener("DOMContentLoaded",events);

function events(){
    getMovieId();
}

function getMovieId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const movieId = urlParams.get("movieId");
    movieDetail(movieId)
}

 async function movieDetail(movieId){
   
    const movie = await MOVIESERVICE.getMovieDetail(movieId);
    console.log(movie);
    showMovie(movie);
}

function showMovie(movie){
    const main = document.getElementById("main");

    const backImage = document.createElement("img");
    const textBox = document.createElement("div");
    textBox.classList.add("textBox");

    backImage.src = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

    backImage.classList.add("backDropImage")
    const title = document.createElement("h1")
    title.textContent = movie.original_title
    const tagline = document.createElement("h2")
    tagline.textContent = movie.tagline
    const overview = document.createElement("p")
    overview.textContent = movie.overview
    
    main.appendChild(backImage);
    main.appendChild(textBox);
    textBox.appendChild(title);
    textBox.appendChild(tagline);
    textBox.appendChild(overview);
}
