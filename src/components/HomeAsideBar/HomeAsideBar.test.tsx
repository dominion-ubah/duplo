import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeAsideBar from './HomeAsideBar';

describe('<HomeAsideBar />', () => {
  test('it should mount', () => {
    render(<HomeAsideBar />);
    
    const homeAsideBar = screen.getByTestId('HomeAsideBar');

    expect(homeAsideBar).toBeInTheDocument();
  });
});