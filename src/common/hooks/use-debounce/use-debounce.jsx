import { useEffect, useState } from 'react';
import { wait } from '../../utils/timers';

const useDebounce = ({ value, delay, action }) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = wait(() => {
      setDebounceValue(value);
      if (action) action();
    }, delay);
    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
};

export default useDebounce;
