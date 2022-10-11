import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useDidMount from '../common/hooks/use-didmount';
import { clearStateAppDispatchAction } from './store/app/dispatchers';
import Routes from './configuration/routes/Routes';
import GlobalStyles from './styles/global-styles';
import { interval } from '../common/utils/timers';
import { diffHours } from '../common/utils/checkers';

const Application = () => {
  const dispatch = useDispatch();

  useDidMount(() => {
    localStorage.setItem('time', new Date());

    if (diffHours(localStorage.getItem('time'), new Date()) > 1)
      dispatch(clearStateAppDispatchAction());

    interval(() => dispatch(clearStateAppDispatchAction()), 3600000);
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
