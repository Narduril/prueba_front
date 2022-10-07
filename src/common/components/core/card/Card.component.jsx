import { useNavigate } from 'react-router-dom';
import { Divider, Typography } from '@mui/material';
import { replaceWhiteSpace } from '../../../utils/replaces';
import {
  CardContainer,
  ImageContainer,
  Image,
  TextContainer
} from './Card.styled';

const Card = (prop) => {
  const navigate = useNavigate();

  const { image, brand, model, price } = prop;

  return (
    <CardContainer
      onClick={() => navigate(`/products-list/${replaceWhiteSpace(model)}`)}
    >
      <ImageContainer>
        <Image src={image} alt="card" />
      </ImageContainer>
      <TextContainer>
        <Typography style={{ fontStyle: 'italic' }}>{brand}</Typography>
        <Typography style={{ fontWeight: 'bold' }}>{model}</Typography>
        <Divider variant="middle" style={{ paddingTop: '15px' }} />
        {price ? (
          <Typography
            style={{ marginTop: '15px', fontSize: '1.5em', color: '#57bf6d' }}
          >
            {`${price}€`}
          </Typography>
        ) : (
          <Typography style={{ marginTop: '15px', fontSize: '1.2em' }}>
            Precio no disponible
          </Typography>
        )}
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
