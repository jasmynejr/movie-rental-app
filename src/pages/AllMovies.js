import axios from 'axios'
import {useState,useEffect} from "react"
import Movie from '../components/Movie'
import './sass/movie_pages.scss'
function AllMovies(){
    const [movies,setMovies] = useState([])

    const getMovies = () => {
        axios.get("http://localhost:8080/api/movies")
        .then(function(response){
            setMovies(response.data)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getMovies()
    },[])
    return (
        <div>
            <h1>All Movies ({movies.length})</h1>
            <div className="movie-grid">
                {
                    movies.map((movie) => {
                        return (
                            <Movie movie={movie} key={movie.id} />
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default AllMovies;