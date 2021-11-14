import React, { useEffect, useState } from 'react';

const DELAY_TO_UPDATE = 100;

export const useDivDimension = (nodeRef: React.RefObject<HTMLDivElement>) => {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    function updateState() {
      if (!nodeRef.current) {
        return;
      }
      const width = nodeRef.current.clientWidth;
      const height = nodeRef.current.clientHeight;
      setSize([width, height]);
    }
    let timeout: ReturnType<typeof setTimeout>;
    function resize() {
      clearTimeout(timeout);
      timeout = setTimeout(updateState, DELAY_TO_UPDATE);
    }
    updateState();
    window.addEventListener(`resize`, resize, false);
    return () => window.removeEventListener(`resize`, resize);
  }, [nodeRef]);

  return size;
};
