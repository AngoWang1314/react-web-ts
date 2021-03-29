import { useEffect, useRef } from 'react';

export default () => {
  const refContainer = useRef(false);

  useEffect(() => {
    refContainer.current = true;
  }, []);
  
  return refContainer.current;
};
