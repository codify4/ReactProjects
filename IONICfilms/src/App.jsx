
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from './assets/search.svg';
import './App.css';


const API_URL = 'http://www.omdbapi.com/?apikey=14c7c1ec';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>IONIC Films</h1>

      <div className="search">
        <input 
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found...</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
