import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SearchBox from './components/SearchForm';
import MovieGenres from './components/GenreSelect';
import MovieTile from './components/MovieTiles';
import { movies } from './constants/constants';
import { useState } from 'react';
import MovieDetails from './components/MovieDetails';
import SortControl from './components/SortControl';

function App() {

  let counterValue = 10;

  const handleSearch = (query) => {
    console.log("Search triggered with query:", query);
  }

  let selectedGenre = "ALL"; 
  const genresList = ["ALL","DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]; 
  const handleGenreSelect = (newGenre) => {
    selectedGenre = newGenre; 
    console.log("New selected movie:", newGenre);
  }

  const [selectedMovie, setSelectedMovie] = useState(null); 

  const handleTileClick = (movie) => {
    setSelectedMovie(movie); 
  };

  const [sortOption, setSortOption] = useState("releaseDate");

  const handleSortChange = (newValue) => {
    console.log(`sorted by ${newValue}`);
    setSortOption(newValue);
  }

  return(
    <React.StrictMode>
      <div className='container'>
      <MovieDetails movie={selectedMovie} />
        <SearchBox initialQuery="Hello" onSearch={handleSearch} />
        <Counter initialValue={counterValue} />
        <MovieGenres
          genres={genresList}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
         <SortControl
        currentSelection={sortOption} 
        onSortChange={handleSortChange} 
      />
         <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.name} className="movie-tile-wrapper">
          <MovieTile movie={movie} onClick={handleTileClick} />
        </div>
      ))}
    </div>
        

      </div>
    </React.StrictMode>
  );
}

export default App;
