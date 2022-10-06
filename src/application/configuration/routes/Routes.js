import { useRoutes } from 'react-router';
import { appRoutes } from './app-routes/appRoutes';

const Routes = () => {
  const routes = useRoutes(appRoutes);

  return <>{routes}</>;
};

export default Routes;
