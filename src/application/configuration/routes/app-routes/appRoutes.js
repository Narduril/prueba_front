import Layout from '../../../components/layout';
import ProductsList from '../../../../pages/products-list';
import ProductDetails from '../../../../pages/product-details';
import { Navigate } from 'react-router';

export const appRoutes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/products-list" /> },
      {
        path: '/products-list',
        element: <ProductsList />,
        children: [
          {
            path: '/products-list/product-details/:id',
            element: <ProductDetails />
          }
        ]
      }
    ]
  }
];
