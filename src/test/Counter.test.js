import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter Component', () => {
  it('should render with the initial value', () => {
    render(<Counter initialValue={5} />);

    const valueElement = screen.getByText('5'); 
    expect(valueElement).toBeInTheDocument();
  });

  it('should increment the value when clicking "+" button', () => {
    render(<Counter initialValue={0} />);

    const incrementButton = screen.getByText('+');

    fireEvent.click(incrementButton);

    const valueElement = screen.getByText('1');
    expect(valueElement).toBeInTheDocument();
  });

  it('should decrement the value when clicking "-" button', () => {

    render(<Counter initialValue={0} />);

    const decrementButton = screen.getByText('-');

    fireEvent.click(decrementButton);

    const valueElement = screen.getByText('-1');
    expect(valueElement).toBeInTheDocument();
  });

  it('should increment and decrement properly with multiple button clicks', () => {

    render(<Counter initialValue={10} />);

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');

    fireEvent.click(incrementButton); 
    fireEvent.click(incrementButton); 
    fireEvent.click(decrementButton); 

    const valueElement = screen.getByText('11');
    expect(valueElement).toBeInTheDocument();
  });
});