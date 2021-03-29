import { useEffect, useCallback, useRef } from 'react';

export default (fn: Function, delay: number, dep: Array<any> = []) => {
  const { current } = useRef({ fn, timer: 0 });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback((...args) => {
    if (current.timer) {
      clearTimeout(current.timer);
    }

    current.timer = window.setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
};
