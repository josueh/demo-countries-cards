import { render, screen } from '@testing-library/react';
import { App } from './App';
import '@testing-library/jest-dom';

describe(App, () => {
  it(`should render "Hello" message`, () => {
    render(<App />);
    expect(screen.getByRole(`heading`, { name: /hello/i })).toBeInTheDocument();
  });
});
