import { useCallback, useRef } from 'react';

const useThrottle = (fn: Function, delay: number, dep: Array<any> = []) => {
  const { current } = useRef({ fn, timer: 0 });

  useCallback(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback((...args) => {
    if (!current.timer) {
      current.timer = window.setTimeout(() => {
        current.timer = 0;
      }, delay);
      
      current.fn.call(this, ...args);
    }
  }, dep);
};

export default useThrottle;
