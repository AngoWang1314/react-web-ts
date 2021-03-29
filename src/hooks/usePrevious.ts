import { useEffect, useRef } from 'react';

export default (value: any) => {
  const refContainer = useRef();

  useEffect(() => {
    refContainer.current = value;
  }, []);
  
  return refContainer.current;
};
