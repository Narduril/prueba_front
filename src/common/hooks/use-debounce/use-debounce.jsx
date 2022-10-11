import { useEffect, useState } from 'react';

/**
 * Custom hook debounce.
 * @param value texto
 * @param action función a ejecutar al actualizar el value
 * @returns debounceValue
 */
const useDebounce = ({ value, action }) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    setDebounceValue(value);
    if (action) action();
  }, [value]);

  return debounceValue;
};

export default useDebounce;
