import { useRef } from 'react';
import { useDivDimension } from '../../hooks/useDivDimension';
import { Map } from './Map';
import { Container } from './styles';

export const CountriesMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, height] = useDivDimension(containerRef);

  function clickCountry(country: { name: string }) {
    console.log(`click!`, country.name);
  }

  return (
    <Container ref={containerRef}>
      <Map width={width} height={height} onCountryClick={clickCountry} />
    </Container>
  );
};
