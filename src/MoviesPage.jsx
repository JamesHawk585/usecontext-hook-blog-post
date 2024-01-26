import MoviesList from './MoviesList'
import { useContext  } from 'react'


const MoviesPage = ({movies}) => {
    const movies = useContext(moviesContext)
    return (
        <MoviesList movies={movies}/>
    )
}

export default MoviesPage