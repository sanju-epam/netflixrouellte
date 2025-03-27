import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchBox Component', () => {
  it('renders input and search button', () => {
    render(<SearchForm />);

    const inputElement = screen.getByRole('textbox'); 
    const buttonElement = screen.getByRole('button', { name: /search/i }); 

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('accepts initialQuery as a default value for the input', () => {
    const initialQuery = 'React Testing';
    render(<SearchForm initialQuery={initialQuery} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(initialQuery);
  });

  it('calls onSearch callback with the correct input value when search button is clicked', () => {
    const onSearchMock = jest.fn(); 
    render(<SearchForm onSearch={onSearchMock} />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /search/i });

    fireEvent.change(inputElement, { target: { value: 'JavaScript' } });

    fireEvent.click(buttonElement);

    // Assert callback is called with the entered value
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('JavaScript');
  });

  it('calls onSearch callback when Enter key is pressed', () => {
    const onSearchMock = jest.fn(); 
    render(<SearchForm onSearch={onSearchMock} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'React' } });

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 13 });
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('React');
  });

  it('does not call onSearch callback when a non-Enter key is pressed', () => {
    const onSearchMock = jest.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'React' } });

    fireEvent.keyDown(inputElement, { key: 'a', code: 65 });

    expect(onSearchMock).not.toHaveBeenCalled();
  });
});