import styled from 'styled-components';
import { minDevice } from '../../../../application/styles/breakpoints/breakpoints';

export const WrapperActions = styled.div`
  font-family: Robot, sans-serif;
`;

export const SelectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${minDevice.laptops} {
    flex-direction: row;
    gap: 50px;
  }
`;

export const Selectors = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p``;

export const ButtonContainer = styled.div`
  margin: 25px 0;
`;
