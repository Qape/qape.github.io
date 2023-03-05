import { render, screen } from '@testing-library/react';
import React from 'react';

import * as ProductHero from '../Hero';

describe('Test if the Hero component is working as expected', () => {
  it('<ProductHero /> matches snapshot', () => {
    render(<ProductHero.default />);
    screen.findByTestId('hero-wrapper');
    expect(screen.getByTestId('typography-qape')).toHaveTextContent('QaPe');
  });
});
