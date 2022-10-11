import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useDidMount from '../../common/hooks/use-didmount/use-didmount';
import { getProductDetailsDispatchAction } from '../../application/store/product/dispatchers';
import { addCartDispatchAction } from '../../application/store/cart/dispatchers';
import Spinner from '../../common/components/core/spinner';
import Image from '../../common/components/core/image';
import { wait } from '../../common/utils/timers';
import { isString, objectLength } from '../../common/utils/checkers';
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
  /** Hooks */
  const dispatch = useDispatch();
  const location = useLocation();

  /** States */
  const productDetails = useSelector((state) => state.product.details);

  /** Local state */
  const [isLoading, setIsLoading] = useState(true);
  const [formState, setFormState] = useState({
    storageCode: objectLength(productDetails)
      ? productDetails.options.storages[0].code
      : '',
    colorCode: objectLength(productDetails)
      ? productDetails.options.colors[0].code
      : ''
  });

  /** Effects */
  useDidMount(() => {
    dispatch(getProductDetailsDispatchAction(location.state.id));
  }, []);

  useDidMount(() => {
    if (objectLength(productDetails))
      setFormState({
        storageCode: productDetails.options.storages[0].code,
        colorCode: productDetails.options.colors[0].code
      });
    wait(() => setIsLoading(false));
  }, [productDetails]);

  /** Events */
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddCart = (e) => {
    e.preventDefault();

    dispatch(
      addCartDispatchAction(
        productDetails.id,
        formState.colorCode,
        formState.storageCode
      )
    );
  };

  return (
    <WrapperContainer>
      <ProductContainer>
        {!isLoading ? (
          <>
            <ProductImageContainer>
              <Image img={productDetails.imgUrl} text={productDetails.model} />
            </ProductImageContainer>
            <DetailsContainer>
              <Info>
                <Title>{productDetails.model}</Title>
                <Divider />
                <Text>
                  <b>Información técnica:</b>
                </Text>
                <InfoList>
                  <ListItem>CPU: {productDetails.cpu}</ListItem>
                  <ListItem>RAM: {productDetails.ram}</ListItem>
                  <ListItem>SO: {productDetails.os}</ListItem>
                  <ListItem>Resolución: {productDetails.displaySize}</ListItem>
                  <ListItem>
                    Batería:
                    {productDetails.battery
                      ? ` ${productDetails.battery}`
                      : ' -'}
                  </ListItem>
                  <ListItem>
                    Cámara principal:{' '}
                    {isString(productDetails.primaryCamera)
                      ? productDetails.primaryCamera
                      : productDetails.primaryCamera.join(' ')}
                  </ListItem>
                  <ListItem>
                    Cámara secundaria:{' '}
                    {isString(productDetails.secondaryCmera)
                      ? productDetails.secondaryCmera
                      : productDetails.secondaryCmera.join(' ')}
                  </ListItem>
                  <ListItem>Dimensiones: {productDetails.dimentions}</ListItem>
                  <ListItem>
                    Peso:
                    {productDetails.weight
                      ? ` ${productDetails.weight} gr.`
                      : ' -'}
                  </ListItem>
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
                        {productDetails.options.storages.map((storage) => {
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
                      <Select
                        name="colorCode"
                        value={formState.colorCode}
                        onChange={handleChange}
                      >
                        {productDetails.options.colors.map((color) => {
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
                    onClick={handleAddCart}
                  >
                    Añadir al carrito
                  </Button>
                </ButtonContainer>
              </Actions>
            </DetailsContainer>
          </>
        ) : (
          <Spinner />
        )}
      </ProductContainer>
    </WrapperContainer>
  );
};

export default ProductDetails;
