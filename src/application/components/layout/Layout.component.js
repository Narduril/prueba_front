import { Outlet } from 'react-router';
import Header from './components/header/Header.component';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
};

export default Layout;
