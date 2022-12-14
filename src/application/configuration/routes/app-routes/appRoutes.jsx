import Layout from '../../../components/layout';
import ProductsList from '../../../../pages/products-list';
import ProductDetails from '../../../../pages/product-details';
import { Navigate } from 'react-router';

/**
 * Configuración de las rutas.
 * Elmento principal: layout.
 * Children: cada una de las rutas hijas
 * Breadcrumb: el texto a mostrar
 */
export const appRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        breadcrumb: 'Home',
        element: <Navigate to="/products-list" />
      },
      {
        path: '/products-list',
        children: [
          {
            path: '/products-list',
            breadcrumb: 'Listado productos',
            element: <ProductsList />
          },
          {
            path: '/products-list/:name',
            element: <ProductDetails />
          }
        ]
      }
    ]
  }
];
