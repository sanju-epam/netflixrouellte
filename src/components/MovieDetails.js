import React from "react";
import '../css/MovieDetails.css'; 

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div></div>;
  }

  const { imageUrl, name, releaseYear, rating, duration, description } = movie;

  return (
    <div className="movie-details-container">
      <div className="movie-image-container">
        <img src={imageUrl} alt={name} className="movie-poster" />
      </div>

      <div className="movie-info-container">
        <h2 className="movie-name">{name}</h2>
        <p className="movie-release-year"><strong>Year:</strong> {releaseYear}</p>
        <p className="movie-rating"><strong>Rating:</strong> {rating}</p>
        <p className="movie-duration"><strong>Duration:</strong> {duration}</p>
        <p className="movie-description"><strong>Description:</strong> {description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;