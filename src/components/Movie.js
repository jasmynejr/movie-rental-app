import "./sass/movies.scss"
function Movie({movie}){

    return (
        <div className="movie-card">
            <i className="fa-solid fa-film"></i>
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-description">{movie.description}</p>
        </div>
    )
}

export default Movie;