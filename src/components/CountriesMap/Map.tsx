import { useEffect, useState } from 'react';
import { CountryName, Path, Svg } from './styles';
import { createMapGenPath } from './Map.utils';
import geojson from './countries.geo.json';

interface BasicMapProps {
  width?: number;
  height?: number;
  onCountryClick?: (country: { id: string; name: string }) => void;
}

interface PathCountry {
  id: string;
  name: string;
  path?: string;
}

export const Map = ({
  width = 400,
  height = 300,
  onCountryClick,
}: BasicMapProps) => {
  const [countrySelected, setCountrySelected] = useState<string | null>();
  const [countries, setCountries] = useState<PathCountry[]>([]);

  useEffect(() => {
    const genPath = createMapGenPath([width, height], geojson);
    const countries: PathCountry[] = geojson.features.map((feature: any) => {
      const { properties, geometry } = feature;
      return { ...properties, path: genPath(geometry) };
    });
    setCountries(countries);
  }, [width, height]);

  function mouseEnter(country: any) {
    setCountrySelected(country.name);
  }

  function mouseLeave() {
    setCountrySelected(null);
  }

  return (
    <>
      <Svg width={width} height={height}>
        {countries.map(({ id, name, path }, index) => (
          <Path
            key={index}
            data-testid={name}
            onMouseEnter={mouseEnter.bind(null, { name })}
            onMouseLeave={mouseLeave}
            onClick={() => onCountryClick!({ id, name })}
            d={path}
          />
        ))}
      </Svg>
      {countrySelected && <CountryDetails name={countrySelected} />}
    </>
  );
};

function CountryDetails({ name }: { name: string }) {
  return <CountryName>{name}</CountryName>;
}
