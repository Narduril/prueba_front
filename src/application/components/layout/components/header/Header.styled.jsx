import styled from 'styled-components';

export const WrapperHeader = styled.header`
  min-height: 80px;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #d8dce3;
`;

export const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  position: relative;
  left: 50px;
`;

export const CartContainer = styled.div`
  position: relative;
  right: 50px;
`;
