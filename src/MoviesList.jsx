import { moviesContext } from './App'
// import MoviesList from './MoviesList'
import { useContext } from 'react'

import MovieCard from './MovieCard'

const MoviesList = () => {
    const movies = useContext(moviesContext)
    // console.log(movies)
    return (
        <>
        {movies.map((movie, index) => <MovieCard key={index} movie={movie}/>
        )}
        </>
    )
}

export default MoviesList