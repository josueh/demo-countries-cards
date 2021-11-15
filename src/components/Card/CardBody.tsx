import { useMemo } from 'react';
import { formatNumber } from '../../helpers/format';
import { CardBodyWrapper } from './styles';

interface CardBodyProps {
  name?: string;
  total?: number;
  loading?: boolean;
  error?: string;
}

export const CardBody = ({
  name = '-',
  total,
  loading,
  error,
}: CardBodyProps) => {
  const totalText = useMemo(() => {
    return total ? formatNumber(total) : 0;
  }, [total]);

  function renderDetails() {
    if (loading) return <div className="message">Loading...</div>;
    if (error) return <div className="message">{error}</div>;
    return <strong>{totalText}</strong>;
  }

  return (
    <CardBodyWrapper>
      <label>{name}</label>
      {renderDetails()}
    </CardBodyWrapper>
  );
};
