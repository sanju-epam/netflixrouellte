import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "../components/SortControl"; // Import the SortControl component

describe("SortControl Component", () => {
  it("renders the label and select dropdown", () => {
    render(<SortControl currentSelection="releaseDate" onSortChange={jest.fn()} />);

    expect(screen.getByText("Sort by")).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.value).toBe("releaseDate");
  });

  it("renders all sorting options", () => {
    render(<SortControl currentSelection="releaseDate" onSortChange={jest.fn()} />);

    expect(screen.getByRole("option", { name: "Release Date" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Title" })).toBeInTheDocument();
  });

  it("calls onSortChange callback when an option is selected", () => {
    const onSortChangeMock = jest.fn(); // Mock function for callback
    render(<SortControl currentSelection="releaseDate" onSortChange={onSortChangeMock} />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "title" } });

    expect(onSortChangeMock).toHaveBeenCalledTimes(1);
    expect(onSortChangeMock).toHaveBeenCalledWith("title");
  });

  it("updates displayed value when selection changes (controlled component)", () => {
    const onSortChangeMock = jest.fn(); 
    const { rerender } = render(
      <SortControl currentSelection="releaseDate" onSortChange={onSortChangeMock} />
    );

    const selectElement = screen.getByRole("combobox");
    expect(selectElement.value).toBe("releaseDate");

    rerender(<SortControl currentSelection="title" onSortChange={onSortChangeMock} />);

    expect(selectElement.value).toBe("title");
  });
});