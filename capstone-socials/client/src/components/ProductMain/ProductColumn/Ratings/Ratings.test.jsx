import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Ratings from './Ratings';


describe('ProductDetails', () => {
    it('renders h1 with ProductDetals', () => {
      render(<Ratings />);
  
      screen.debug();
  
      // check if App components renders headline
      expect(screen.getByText('Ratings')).toBeInTheDocument();
    });
  });