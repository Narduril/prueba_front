import styled from 'styled-components';
import { minDevice } from '../../../../styles/breakpoints/breakpoints';

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${minDevice.mobile} {
    display: block;
  }
`;
