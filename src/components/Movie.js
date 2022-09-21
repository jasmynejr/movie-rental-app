import "./sass/movies.scss"
function Movie({movie}){

    return (
        <div className="movie-card">
            <i class="fa-solid fa-film"></i>
            <h3 className="movie-card-title">{movie.movieTitle}</h3>
            <p className="movie-card-description">{movie.movieDescription}</p>
        </div>
    )
}

export default Movie;