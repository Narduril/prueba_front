import CircularProgress from '@mui/material/CircularProgress';
import { SpinnerContainer } from './Spinner.styled';

/**
 * Componente común para renderizar un spinner
 * @param { size } default: 100
 * @returns Spinner
 */
const Spinner = ({ size = 100 }) => {
  return (
    <SpinnerContainer>
      <CircularProgress color="primary" size={size} />
    </SpinnerContainer>
  );
};

export default Spinner;
