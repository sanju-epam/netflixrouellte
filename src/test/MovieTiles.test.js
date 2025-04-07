import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "../components/MovieTiles";

describe("MovieTile Component", () => {
    const mockMovie = {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/lv/7/7f/Inception_ver3.jpg', 
        name: 'Inception',
        releaseYear: '2010',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        rating: '8.8',
        duration: '2h 28m',
        description: 'A thief who steals corporate secrets through dream-sharing technology must perform his toughest job yet: planting an idea in the mind of his target.'
      }
  const mockOnClick = jest.fn(); 

  it("renders the movie tile with the correct details", () => {
    render(<MovieTile movie={mockMovie} onClick={mockOnClick} />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("Action, Adventure, Sci-Fi")).toBeInTheDocument();

    expect(screen.getByText("2010")).toBeInTheDocument();

    const imageElement = screen.getByRole("img", { name: "Inception" });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "https://upload.wikimedia.org/wikipedia/lv/7/7f/Inception_ver3.jpg");
  });

  it("calls onClick callback when the tile is clicked", () => {
    render(<MovieTile movie={mockMovie} onClick={mockOnClick} />);

    const tileElement = screen.getByText("Inception");
    fireEvent.click(tileElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(mockMovie);
  });

  it("toggles the context menu when the three-dots button (⋮) is clicked", () => {
    render(<MovieTile movie={mockMovie} onClick={mockOnClick} />);

    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();

    const menuButton = screen.getByText("⋮");
    fireEvent.click(menuButton);

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });

  it("handles Edit button click and closes the context menu", () => {
    console.log = jest.fn();
    render(<MovieTile movie={mockMovie} onClick={mockOnClick} />);

    const menuButton = screen.getByText("⋮");
    fireEvent.click(menuButton);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    expect(console.log).toHaveBeenCalledWith("Editing movie: Inception");

    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });

  it("handles Delete button click and closes the context menu", () => {
    console.log = jest.fn(); 
    render(<MovieTile movie={mockMovie} onClick={mockOnClick} />);

    const menuButton = screen.getByText("⋮");
    fireEvent.click(menuButton);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(console.log).toHaveBeenCalledWith("Deleting movie: Inception");

    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });
});