import { Outlet } from 'react-router';
import NextBreadcrumbs from './components/breadcrumbs';
import Header from './components/header';
import { MainContainer, BreadcrumbsContainer } from './Layout.styled';

/**
 * Este componente es el layout general de toda la app.
 */
const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <BreadcrumbsContainer>
        <NextBreadcrumbs />
      </BreadcrumbsContainer>
      <Outlet />
    </MainContainer>
  );
};

export default Layout;
