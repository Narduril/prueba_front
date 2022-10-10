import { useEffect, useState } from 'react';

const useDebounce = ({ value, delay, action }) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    setDebounceValue(value);
    if (action) action();
  }, [value]);

  return debounceValue;
};

export default useDebounce;
