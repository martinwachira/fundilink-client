import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderSignup from './ProviderSignup';

describe('<ProviderSignup />', () => {
  test('it should mount', () => {
    render(<ProviderSignup />);
    
    const providerSignup = screen.getByTestId('ProviderSignup');

    expect(providerSignup).toBeInTheDocument();
  });
});