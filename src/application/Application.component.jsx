import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global-styles';
import Routes from './configuration/routes/Routes';

const Application = () => {
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
