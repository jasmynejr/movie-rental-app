import axios from 'axios'
import {useState,useEffect} from "react"
import Movie from '../components/Movie'
import ReactPaginate from 'react-paginate';
import './sass/movie_pages.scss'
function AllMovies(){
    const [movies,setMovies] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const [currentMovies,setCurrentMovies] = useState([])

    const moviesPerPage = 36;
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

    useEffect(() => {
        const endOffset = itemOffset + moviesPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentMovies(movies.slice(itemOffset,endOffset))
        setPageCount(Math.ceil(movies.length / moviesPerPage))
    },[itemOffset,moviesPerPage])

    const changePage = (event) => {
        const newOffset = (event.selected * moviesPerPage) % movies.length;
        console.log(`Moving to page ${event.selected} which is offset ${newOffset}`)
        setItemOffset(newOffset);
    }
    if(currentMovies.length !== 0){
        return (
            <div>
                <h1>All Movies ({movies.length})</h1>
                <div className="movie-grid">
                    {
                        currentMovies.map((movie) => {
                            return (
                                <Movie movie={movie} key={movie.id} />
                            )
                        })
                    }
                </div>
                <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={changePage}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageLinkClassName="page-link"
                activeLinkClassName='active'
                containerClassName='page-container'
                previousClassName='page-link'
                nextClassName='page-link '
            />
                
            </div>
        )
    }
    else {
        return "loading movies"
    }
    
}

export default AllMovies;