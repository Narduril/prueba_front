import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useDidMount from '../../common/hooks/use-didmount';
import { getProductDetailsDispatchAction } from '../../application/store/product/dispatchers';
import { addCartDispatchAction } from '../../application/store/cart/dispatchers';
import Details from './components/details';
import Actions from './components/actions';
import Spinner from '../../common/components/core/spinner';
import Image from '../../common/components/core/image';
import { wait } from '../../common/utils/timers';
import { objectLength } from '../../common/utils/checkers';
import { Divider } from '@mui/material';
import {
  WrapperContainer,
  ProductContainer,
  ProductImageContainer,
  DetailsContainer
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
              <Details {...currentProduct} />
              <Divider />
              <Actions
                product={currentProduct}
                codes={formState}
                handleChange={handleChange}
                handleAddCart={handleAddCart}
              />
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
