import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "../components/MovieDetails"; 

describe("MovieDetails Component", () => {
  const mockMovie = {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/lv/7/7f/Inception_ver3.jpg', 
    name: 'Inception',
    releaseYear: '2010',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: '8.8',
    duration: '2h 28m',
    description: 'A thief who steals corporate secrets through dream-sharing technology must perform his toughest job yet: planting an idea in the mind of his target.'
  }

  it("renders movie details when a movie is passed", () => {
    render(<MovieDetails movie={mockMovie} />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText("8.8")).toBeInTheDocument();
    expect(screen.getByText("2h 28m")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A thief who steals corporate secrets through dream-sharing technology must perform his toughest job yet: planting an idea in the mind of his target."
      )
    ).toBeInTheDocument();
  });

  it("renders the movie poster image with correct src and alt attributes", () => {
    render(<MovieDetails movie={mockMovie} />);
    const movieImage = screen.getByRole("img", { name: "Inception" });
    expect(movieImage).toBeInTheDocument();
    expect(movieImage).toHaveAttribute("src", "https://upload.wikimedia.org/wikipedia/lv/7/7f/Inception_ver3.jpg");
    expect(movieImage).toHaveAttribute("alt", "Inception");
  });
});