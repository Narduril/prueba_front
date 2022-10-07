import Layout from '../../../components/layout';
import ProductsList from '../../../../pages/products-list';
import ProductDetails from '../../../../pages/product-details';
import { Navigate } from 'react-router';

export const appRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        breadcrumb: 'Home',
        element: <Navigate to="/products-list" />,
      },
      {
        path: '/products-list',
        breadcrumb: 'Listado productos',
        element: <ProductsList />,
        children: [
          {
            path: '/products-list/:id',
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
];
