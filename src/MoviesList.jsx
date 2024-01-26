import { moviesContext } from './App'
import MoviesList from './MoviesList'
import { useContext } from 'react'

import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {
    const movies = useContext(movies)
    return (
        <>
        {movies.map((movie, index) => <MovieCard key={index} movie={movie}/>
        )}
        </>
    )
}

export default MoviesList