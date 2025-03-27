import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the SearchBox with initial query', () => {
    render(<App />);

    const searchInput = screen.getByRole('textbox'); 
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('Hello'); 
  });

  it('triggers handleSearch when the search button is clicked', () => {
    render(<App />);

    //const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByText('Search');

    
    //fireEvent.change(searchInput, { target: { value: 'Thriller' } });
    fireEvent.click(searchButton);

    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).toHaveBeenCalledWith('Search triggered with query:', 'Hello');

    logSpy.mockRestore();
  });

  it('renders the Counter component with initial value', () => {
    render(<App />);

    const counterValue = screen.getByText('10'); 
    expect(counterValue).toBeInTheDocument();
  });

  it('increments and decrements the counter value correctly', () => {
    render(<App />);

    const incrementButton = screen.getByText('+'); 
    const decrementButton = screen.getByText('-'); 

    fireEvent.click(incrementButton);
    expect(screen.getByText('11')).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('renders genres correctly with MovieGenres component', () => {
    render(<App />);
    const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
    genres.forEach((genre) => {
      const genreButton = screen.getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });

    const selectedGenreButton = screen.getByText('ALL');
    expect(selectedGenreButton).toHaveClass('selected-button'); // Mocked class
  });

  it('updates selected genre when a genre button is clicked', () => {
    render(<App />);

    const crimeButton = screen.getByText('CRIME');
    fireEvent.click(crimeButton);

    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).toHaveBeenCalledWith('New selected movie:', 'CRIME'); 

    logSpy.mockRestore();
  });

});