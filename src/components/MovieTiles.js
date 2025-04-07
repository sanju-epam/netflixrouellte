import React, { useState } from 'react';
import '../App.css';
function MovieTile  ({
  movie = {}, 
  onClick, 
})  {
  const { imageUrl, name, releaseYear, genres } = movie; 
  const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleEdit = () => {
    console.log(`Editing movie: ${name}`);
    setShowMenu(false); 
  };

  const handleDelete = () => {
    console.log(`Deleting movie: ${name}`);
    setShowMenu(false); 
  };

  return (
    <div className="movie-tile" onClick={() => onClick(movie)}>
  <img src={imageUrl} alt={name} className="movie-image-top" />

  <div className="movie-details">
  <div className="movie-info">
    <p className="movie-name">{name}</p> 
    <p className="movie-genres">{genres.join(', ')}</p> 
  </div>
  <div className="movie-year">
    <p className="movie-release">{releaseYear}</p>
  </div>
</div>

  <button className="menu-button" onClick={(e) => {
    e.stopPropagation();
    toggleMenu();
  }}>⋮</button>

  {showMenu && (
    <div className="context-menu">
      <button onClick={handleEdit} className="menu-item">Edit</button>
      <button onClick={handleDelete} className="menu-item">Delete</button>
    </div>
  )}
</div>
  );
};

export default MovieTile;