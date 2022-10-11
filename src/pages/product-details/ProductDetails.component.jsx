import { useState } from 'react';
import Image from '../../common/components/core/image';
import { Divider, FormControl, MenuItem, Select, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  WrapperContainer,
  ProductContainer,
  ProductImageContainer,
  DetailsContainer,
  Info,
  InfoList,
  ListItem,
  Title,
  Text,
  Actions,
  SelectsContainer,
  Selectors,
  ButtonContainer
} from './ProductDetails.styled';

const ProductDetails = () => {
  const productInfo = {
    model: 'Iconia Talk S',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
    announced: '2016  August',
    status: 'Available. Released 2016  October',
    dimentions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
    weight: '260',
    sim: 'Dual SIM (Micro-SIM/Nano-SIM)',
    displayType: 'IPS LCD capacitive touchscreen  16M colors',
    displayResolution: '7.0 inches (~69.8% screen-to-body ratio)',
    displaySize: '720 x 1280 pixels (~210 ppi pixel density)',
    os: 'Android 6.0 (Marshmallow)',
    cpu: 'Quad-core 1.3 GHz Cortex-A53',
    chipset: 'Mediatek MT8735',
    gpu: 'Mali-T720MP2',
    externalMemory: 'microSD  up to 128 GB (dedicated slot)',
    internalMemory: ['16 GB', '32 GB'],
    ram: '2 GB RAM',
    primaryCamera: ['13 MP', 'autofocus'],
    secondaryCmera: ['2 MP', '720p'],
    speaker: 'Yes',
    audioJack: 'Yes',
    wlan: ['Wi-Fi 802.11 a/b/g/n', 'Wi-Fi Direct', 'hotspot'],
    bluetooth: ['4.0', 'A2DP'],
    gps: 'Yes with A-GPS GLONASS',
    nfc: '',
    radio: 'FM radio',
    usb: 'microUSB 2.0',
    sensors: ['Accelerometer', 'proximity'],
    battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
    colors: ['Black'],
    options: {
      colors: [
        {
          code: 1000,
          name: 'Black'
        }
      ],
      storages: [
        {
          code: 2000,
          name: '16 GB'
        },
        {
          code: 2001,
          name: '32 GB'
        }
      ]
    }
  };

  const [formState, setFormState] = useState({
    storageCode: productInfo.options.storages[0].code,
    colorCode: productInfo.options.colors[0].code
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <WrapperContainer>
      <ProductContainer>
        <ProductImageContainer>
          <Image img={productInfo.imgUrl} text={productInfo.model} />
        </ProductImageContainer>
        <DetailsContainer>
          <Info>
            <Title>{productInfo.model}</Title>
            <Divider />
            <Text>
              <b>Información técnica:</b>
            </Text>
            <InfoList>
              <ListItem>CPU: {productInfo.cpu}</ListItem>
              <ListItem>RAM: {productInfo.ram}</ListItem>
              <ListItem>SO: {productInfo.os}</ListItem>
              <ListItem>Resolución: {productInfo.displaySize}</ListItem>
              <ListItem>Batería: {productInfo.battery}</ListItem>
              <ListItem>
                Cámara principal: {productInfo.primaryCamera.join(' ')}
              </ListItem>
              <ListItem>
                Cámara secundaria: {productInfo.secondaryCmera.join(' ')}
              </ListItem>
              <ListItem>Dimensiones: {productInfo.dimentions}</ListItem>
              <ListItem>Peso: {productInfo.weight}</ListItem>
            </InfoList>
          </Info>
          <Divider />
          <Actions>
            <SelectsContainer>
              <Selectors>
                <Text>
                  <b>Almacenamiento:</b>
                </Text>
                <FormControl sx={{ width: '100%' }}>
                  <Select
                    name="storageCode"
                    value={formState.storageCode}
                    onChange={handleChange}
                  >
                    {productInfo.options.storages.map((storage) => {
                      return (
                        <MenuItem key={storage.code} value={storage.code}>
                          {storage.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Selectors>
              <Selectors>
                <Text>
                  <b>Color:</b>
                </Text>
                <FormControl sx={{ width: '100%' }}>
                  <Select name="colorCode" value={formState.colorCode}>
                    {productInfo.options.colors.map((color) => {
                      return (
                        <MenuItem key={color.code} value={color.code}>
                          {color.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Selectors>
            </SelectsContainer>
            <ButtonContainer>
              <Button
                variant="contained"
                color="success"
                startIcon={<ShoppingCartIcon />}
              >
                Añadir al carrito
              </Button>
            </ButtonContainer>
          </Actions>
        </DetailsContainer>
      </ProductContainer>
    </WrapperContainer>
  );
};

export default ProductDetails;
