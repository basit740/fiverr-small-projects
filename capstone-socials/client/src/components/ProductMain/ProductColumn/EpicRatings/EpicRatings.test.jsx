import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EpicRatings from './EpicRatings';

describe('ProductDetails', () => {
    it('renders h1 with ProductDetals', () => {
      render(<EpicRatings />);
  
      screen.debug();
  
      // check if App components renders headline
      expect(screen.getByText('EpicRatings')).toBeInTheDocument();
    });
  });