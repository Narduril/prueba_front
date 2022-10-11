import { Divider } from '@mui/material';
import { isString } from '../../../../common/utils/checkers';
import { WrapperInfo, Title, Text, InfoList, ListItem } from './Details.styled';

const Details = (currentProduct) => {
  const {
    model,
    cpu,
    ram,
    os,
    displaySize,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight
  } = currentProduct;

  return (
    <WrapperInfo>
      <Title>{model}</Title>
      <Divider />
      <Text>
        <b>Información técnica:</b>
      </Text>
      <InfoList>
        <ListItem>CPU: {cpu}</ListItem>
        <ListItem>RAM: {ram}</ListItem>
        <ListItem>SO: {os}</ListItem>
        <ListItem>Resolución: {displaySize}</ListItem>
        <ListItem>
          Batería:
          {battery ? ` ${battery}` : ' -'}
        </ListItem>
        <ListItem>
          Cámara principal:{' '}
          {isString(primaryCamera) ? primaryCamera : primaryCamera.join(' ')}
        </ListItem>
        <ListItem>
          Cámara secundaria:{' '}
          {isString(secondaryCmera) ? secondaryCmera : secondaryCmera.join(' ')}
        </ListItem>
        <ListItem>Dimensiones: {dimentions}</ListItem>
        <ListItem>
          Peso:
          {weight ? ` ${weight} gr.` : ' -'}
        </ListItem>
      </InfoList>
    </WrapperInfo>
  );
};

export default Details;
