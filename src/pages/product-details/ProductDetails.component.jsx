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
  const productsList = useSelector((state) => state.product.details);

  /** Local state */
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState({});
  const [formState, setFormState] = useState({
    storageCode: '',
    colorCode: ''
  });

  /** Effects */
  useDidMount(() => {
    if (!productsList.find((product) => product.id === location.state.id))
      dispatch(getProductDetailsDispatchAction(location.state.id));
  }, []);

  useDidMount(() => {
    if (productsList.length) {
      const findedProduct = productsList.find(
        (product) => product.id === location.state.id
      );
      setCurrentProduct(findedProduct ?? {});
    }
  }, [productsList]);

  useDidMount(() => {
    if (objectLength(currentProduct)) {
      setFormState({
        storageCode: currentProduct.options.storages[0].code,
        colorCode: currentProduct.options.colors[0].code
      });
      wait(() => setIsLoading(false));
    }
  }, [currentProduct]);

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
        currentProduct.id,
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
              <Image img={currentProduct.imgUrl} text={currentProduct.model} />
            </ProductImageContainer>
            <DetailsContainer>
              <Info>
                <Title>{currentProduct.model}</Title>
                <Divider />
                <Text>
                  <b>Información técnica:</b>
                </Text>
                <InfoList>
                  <ListItem>CPU: {currentProduct.cpu}</ListItem>
                  <ListItem>RAM: {currentProduct.ram}</ListItem>
                  <ListItem>SO: {currentProduct.os}</ListItem>
                  <ListItem>Resolución: {currentProduct.displaySize}</ListItem>
                  <ListItem>
                    Batería:
                    {currentProduct.battery
                      ? ` ${currentProduct.battery}`
                      : ' -'}
                  </ListItem>
                  <ListItem>
                    Cámara principal:{' '}
                    {isString(currentProduct.primaryCamera)
                      ? currentProduct.primaryCamera
                      : currentProduct.primaryCamera.join(' ')}
                  </ListItem>
                  <ListItem>
                    Cámara secundaria:{' '}
                    {isString(currentProduct.secondaryCmera)
                      ? currentProduct.secondaryCmera
                      : currentProduct.secondaryCmera.join(' ')}
                  </ListItem>
                  <ListItem>Dimensiones: {currentProduct.dimentions}</ListItem>
                  <ListItem>
                    Peso:
                    {currentProduct.weight
                      ? ` ${currentProduct.weight} gr.`
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
                        {currentProduct.options.storages.map((storage) => {
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
                        {currentProduct.options.colors.map((color) => {
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
