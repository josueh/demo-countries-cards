import { render, screen, fireEvent } from '@testing-library/react';
import { Map } from './Map';
import '@testing-library/jest-dom';

jest.mock(`./Map.utils`, () => {
  return {
    createMapGenPath: () => () => ``,
  };
});

describe(Map, () => {
  it(`should render some countries`, () => {
    render(<Map />);
    expect(screen.queryByTestId(/brazil/i)).toBeInTheDocument();
    expect(screen.queryAllByTestId(/republic/i).length).toBeGreaterThan(1);
  });

  it(`should be able to select a country by mouse click`, () => {
    const countryName = `Brazil`;
    const onCountryClick = jest.fn();
    render(<Map onCountryClick={onCountryClick} />);
    const path = screen.queryByTestId(countryName);
    fireEvent.click(path!);
    expect(onCountryClick).toBeCalledWith(
      expect.objectContaining({ name: countryName })
    );
  });
});
