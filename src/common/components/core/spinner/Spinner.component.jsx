import CircularProgress from '@mui/material/CircularProgress';
import { SpinnerContainer } from './Spinner.styled';

const Spinner = ({ size = 100 }) => {
  return (
    <SpinnerContainer>
      <CircularProgress color="primary" size={size} />
    </SpinnerContainer>
  );
};

export default Spinner;
