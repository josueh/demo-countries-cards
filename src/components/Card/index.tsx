import { useEffect, useState } from 'react';
import { CardBody } from './CardBody';
import { CardWrapper, CARD_WIDTH } from './styles';
import { services } from '../../services';

interface CardProps {
  index: number;
  name: string;
}

interface CardData {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  total: number;
}

export const Card = ({ index, name }: CardProps) => {
  const [data, setData] = useState<CardData>({ status: 'idle', total: 0 });
  const left = 20 + (CARD_WIDTH + 15) * index;

  useEffect(() => {
    setData((prev) => ({ ...prev, status: `pending` }));
    services.country
      .getPopulation(name)
      .then((total) => {
        setData({ status: 'resolved', total });
      })
      .catch((error) => {
        console.error(`Ops!`, error);
        setData((prev) => ({ ...prev, status: 'rejected' }));
      });
  }, [name]);

  return (
    <CardWrapper style={{ left }} data-testid={`card-${name}`}>
      <CardBody
        name={name}
        total={data.total}
        loading={data.status === 'pending'}
        error={data.status === 'rejected' ? 'Something went wrong' : undefined}
      />
    </CardWrapper>
  );
};
