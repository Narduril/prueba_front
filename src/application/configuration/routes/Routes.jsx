import { useRoutes } from 'react-router';
import { appRoutes } from './app-routes/appRoutes';

/**
 * Componente para las rutas.
 */
const Routes = () => {
  /** Configuración rutas */
  const routes = useRoutes(appRoutes);

  return <>{routes}</>;
};

export default Routes;
