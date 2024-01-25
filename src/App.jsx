import logo from './logo.svg';
import './App.css';

export const movies = createContext(movies)


function App() {
  return (
    <movies.Provider movies={movies}>
    <MoviesPage/>
    </movies.Provider>
  );
}

export default App
