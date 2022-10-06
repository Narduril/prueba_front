import { Outlet } from 'react-router';
import { MainContainer } from './Layout.styled';
const Layout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default Layout;
