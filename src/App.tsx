import { useState } from 'react';
import { Card } from './components/Card';
import { CountriesMap } from './components/CountriesMap';

type CardName = string;

export const App = () => {
  const [cards, setCards] = useState<CardName[]>([]);

  function clickCountry({ name }: { name: string }) {
    setCards((prev) => {
      const card = prev.find((card) => card === name);
      return card ? prev : [...prev, name];
    });
  }

  return (
    <>
      <CountriesMap onCountryClick={clickCountry} />
      {cards.map((cardName, index) => (
        <Card key={cardName} index={index} name={cardName} />
      ))}
    </>
  );
};
