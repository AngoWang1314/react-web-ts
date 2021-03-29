import { useEffect, useRef } from 'react';

export default () => {
  const refContainer = useRef(true);

  useEffect(() => {
    refContainer.current = false;
  }, []);
  
  return refContainer.current;
};
