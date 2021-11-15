import { useRef } from 'react';
import { useDivDimension } from '../../hooks/useDivDimension';
import { Map } from './Map';
import { Container } from './styles';

interface CountriesMapProps {
  onCountryClick?: (data: { name: string }) => void;
}

export const CountriesMap = ({ onCountryClick }: CountriesMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, height] = useDivDimension(containerRef);

  return (
    <Container ref={containerRef}>
      <Map width={width} height={height} onCountryClick={onCountryClick} />
    </Container>
  );
};
