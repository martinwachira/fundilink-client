import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployerSignup from './EmployerSignup';

describe('<EmployerSignup />', () => {
  test('it should mount', () => {
    render(<EmployerSignup />);
    
    const employerSignup = screen.getByTestId('EmployerSignup');

    expect(employerSignup).toBeInTheDocument();
  });
});