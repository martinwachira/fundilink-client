import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Aside from './Aside';

describe('<Aside />', () => {
  test('it should mount', () => {
    render(<Aside />);
    
    const aside = screen.getByTestId('Aside');

    expect(aside).toBeInTheDocument();
  });
});