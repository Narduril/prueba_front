import styled from 'styled-components';
import { minDevice } from '../../application/styles/breakpoints/breakpoints';

export const WrapperContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0 50px 0;

  @media ${minDevice.mobile} {
    justify-content: flex-end;
    margin: 25px 50px 50px 25px;
  }
`;

export const ProductsContainer = styled.section`
  width: 90%;
  margin: 0 auto;
`;
