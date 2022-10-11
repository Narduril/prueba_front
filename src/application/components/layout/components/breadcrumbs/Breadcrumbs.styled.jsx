import styled from 'styled-components';
import { minDevice } from '../../../../styles/breakpoints/breakpoints';

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;

  & a {
    color: #000000;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & a:visited {
    color: #000000;
  }

  @media ${minDevice.mobile} {
    display: block;
  }
`;
