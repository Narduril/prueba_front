import { BrowserRouter } from 'react-router-dom';
import Routes from './configuration/routes/Routes';

const Application = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default Application;
