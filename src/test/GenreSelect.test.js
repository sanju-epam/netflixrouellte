import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieGenres from "../components/GenreSelect";

describe("MovieGenres Component", () => {
  it("renders all genres as buttons", () => {
    const genres = ["Action", "Comedy", "Drama"];

    render(<MovieGenres genres={genres} />);

    genres.forEach((genre) => {
      const genreButton = screen.getByText(genre);
      expect(genreButton).toBeInTheDocument(); 
      expect(genreButton).toHaveClass("button");
    });
  });

  it("applies 'selected-button' class to the selected genre", () => {
    const genres = ["Action", "Comedy", "Drama"];

    render(<MovieGenres genres={genres} />);

    const actionButton = screen.getByText("Action");
    const comedyButton = screen.getByText("Comedy");

    fireEvent.click(actionButton);
    expect(actionButton).toHaveClass("selected-button");
    expect(comedyButton).not.toHaveClass("selected-button");

    // Click on the "Comedy" button
    fireEvent.click(comedyButton);
    expect(comedyButton).toHaveClass("selected-button");
    expect(actionButton).not.toHaveClass("selected-button");
  });

  it("calls the onSelect callback with the selected genre", () => {
    const genres = ["Action", "Comedy", "Drama"];
    const onSelectMock = jest.fn();

    render(<MovieGenres genres={genres} onSelect={onSelectMock} />);

    const dramaButton = screen.getByText("Drama");
    fireEvent.click(dramaButton);

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith("Drama");
  });

  it("initializes with the pre-selected genre", () => {
    const genres = ["Action", "Comedy", "Drama"];
    const selectedGenre = "Comedy";

    render(<MovieGenres genres={genres} selectedGenre={selectedGenre} />);

    const comedyButton = screen.getByText("Comedy");
    expect(comedyButton).toHaveClass("selected-button");
  });
});