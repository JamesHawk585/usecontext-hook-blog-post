import logo from './logo.svg';
import './App.css';
import { useEffect, createContext, useState } from 'react';
import MoviesPage from './MoviesPage';

export const moviesContext = createContext()


function App() {
 const [movies, setMovies] = useState()

  useEffect(() => {
    fetch('http://localhost:5555/movies')
    .then((r) => r.json())
    .then(setMovies)
  }, []);

  return (
    <moviesContext.Provider value={movies}>
    <MoviesPage/>
    </moviesContext.Provider>
  );
}

export default App
