import { useRef, useEffect } from 'react';

/**
 * Custom hook de montaje
 * @param func ejecutar al tener cargado el componente al que se llama
 * @param deps el valor que se tiene que actualizar para ejecutar el useEffect
 */

const useDidMount = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMount;
