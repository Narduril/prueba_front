import styled from 'styled-components';
import { minDevice } from '../../application/styles/breakpoints/breakpoints';

export const WrapperContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const ProductContainer = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 50px;

  @media ${minDevice.tablets} {
    width: 80%;
    display: flex;
    gap: 25px;
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 300px;
  padding: 25px 0;

  @media ${minDevice.tablets} {
    width: 40%;
    padding: 0;
  }

  @media ${minDevice.laptops} {
    width: 50%;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;

  @media ${minDevice.tablets} {
    width: 60%;
  }

  @media ${minDevice.laptops} {
    width: 50%;
  }
`;
