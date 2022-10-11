import axios from 'axios'
import {json, useParams} from 'react-router-dom'
import {useState,useEffect} from "react"

function MoviePage(){
    let movieId = useParams()
    const [movie,setMovie] = useState({})

    const getMovie = () => {
        axios.get(`http://localhost:8080/api/movies/${movieId}`)
        .then (function(response){
            setMovie(response.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovie()
    },[])

    if(JSON.stringify(movie) !== "{}"){
        return (
            <div className="movie-container">
                <h1>{movie.title}</h1>
            </div>
        )
    }
    return(
        <div>
            <p>loading movie...</p>
        </div>
    )
}

export default MoviePage;