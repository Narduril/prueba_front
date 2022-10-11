import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useDidMount from '../common/hooks/use-didmount';
import { clearStateAppDispatchAction } from './store/app/dispatchers';
import Routes from './configuration/routes/Routes';
import GlobalStyles from './styles/global-styles';
import { interval } from '../common/utils/timers';
import { diffHours } from '../common/utils/checkers';
import { clearState } from '../common/utils/clear';

/**
 * Este componente renderiza la aplicación.
 * Se ejecuta una función para chequear el tiempo dentro de la web
 * y limpiar el state y el storage.
 * Se aplican las rutas
 */
const Application = () => {
  /** Hooks varios */
  const dispatch = useDispatch();

  /** Effects */
  useDidMount(() => {
    if (!localStorage.getItem('time')) localStorage.setItem('time', new Date());

    if (diffHours(localStorage.getItem('time'), new Date()) > 1)
      clearState(dispatch(clearStateAppDispatchAction()));

    interval(
      () => clearState(dispatch(clearStateAppDispatchAction())),
      3600000
    );
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default Application;
