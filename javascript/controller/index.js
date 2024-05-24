import MOVIESERVICE from "../services/movieService.js";

window.addEventListener("DOMContentLoaded",events);

function events(){
    getMovies("popular");
    getMovies("upcoming");
    getMovies("top_rated");
}

async function getMovies(type){
   const movies =  await MOVIESERVICE.getMovieList(type);
   showMovies(movies,type)
}

function showMovies(movies,type){
    const movieList = document.getElementById(type)
    movies.forEach(movie => {
        const card = document.createElement("div")
        card.classList.add("card")
        const image = document.createElement("img");


        image.src = `https://image.tmdb.org/t/p/w500${movie.imagePath}`

        card.setAttribute("movieId",movie.id)
        card.addEventListener("click",showDetails)
        card.appendChild(image);

        movieList.appendChild(card);
    });
}

function showDetails(){
    const movieId = this.getAttribute("movieId");

    window.location.href = `../../detail.html?movieId=${movieId}`
}