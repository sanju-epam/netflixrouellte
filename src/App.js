import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SearchBox from './components/SearchForm';
import MovieGenres from './components/GenreSelect';

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

  return(
    <React.StrictMode>
      <div className='container'>
        <SearchBox initialQuery="Hello" onSearch={handleSearch} />
        <Counter initialValue={counterValue} />
        <MovieGenres
          genres={genresList}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
      </div>
    </React.StrictMode>
  );
}

export default App;
