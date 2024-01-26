import logo from './logo.svg';
import './App.css';
import { useEffect, createContext, useState } from 'react';

export const movies = createContext(movies)


function App() {
 const [movies, setMovies] = useState()

  useEffect(() => {
    fetch('http://localhost:5555/movies')
    .then((r) => r.json())
    .then(setMovies)
  })

  return (
    <movies.Provider movies={movies}>
    <MoviesPage/>
    </movies.Provider>
  );
}

export default App
