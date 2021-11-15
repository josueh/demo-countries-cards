import { render, screen } from '@testing-library/react';
import { CardBody } from './CardBody';
import '@testing-library/jest-dom';

describe(CardBody, () => {
  it(`should render "loading" when starting`, () => {
    render(<CardBody loading={true} />);
    expect(screen.queryByText(/loading/i)).toBeInTheDocument();
  });

  it(`should render error message when something is wrong`, () => {
    const error = 'Interval Server Error';
    render(<CardBody error={error} />);
    expect(screen.queryByText(error)).toBeInTheDocument();
  });

  it(`should render "name and total" when correctly loaded`, () => {
    const name = 'Brazil';
    const total = 1000;
    const totalText = `1,000`;
    render(<CardBody name={name} total={total} />);
    expect(screen.queryByText(name)).toBeInTheDocument();
    expect(screen.queryByText(totalText)).toBeInTheDocument();
  });
});
