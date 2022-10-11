import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoImg from '../../../../assets/img/logoipsum-284.svg';
import {
  WrapperHeader,
  HeaderContainer,
  Image,
  CartContainer
} from './Header.styled';

/**
 * Este componente renderiza la cabecera.
 * Se muestra un carrito que se actualiza al añadir nuevos items al mismo.
 */
const Header = () => {
  /** States */
  const cartCount = useSelector((state) => state.cart.count);

  return (
    <WrapperHeader>
      <HeaderContainer>
        <Link to="/products-list">
          <Image src={LogoImg} alt="logo-shop" />
        </Link>
        <CartContainer>
          <IconButton aria-label="cart">
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon style={{ color: '#000000', fontSize: '30' }} />
            </Badge>
          </IconButton>
        </CartContainer>
      </HeaderContainer>
    </WrapperHeader>
  );
};

export default Header;
