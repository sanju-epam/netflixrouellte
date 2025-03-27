import React from "react";

class MovieGenres extends React.Component {
  constructor(props) {
    super(props);
    this.selectedGenre = props.selectedGenre || ""; 
  }
  handleGenreSelect = (genre) => {
    this.selectedGenre = genre; 
    console.log(`Selected genre: ${genre}`);
    if (this.props.onSelect) {
      this.props.onSelect(genre); 
    }
    this.forceUpdate();
  };

  render() {
    const { genres } = this.props; 

    return (
        <div className="horizontal-flex">
        {genres.map((genre) => (
          <button
            key={genre}
            className={this.selectedGenre === genre ? "selected-button" : "button"}
            onClick={() => this.handleGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  };
}

export default MovieGenres;