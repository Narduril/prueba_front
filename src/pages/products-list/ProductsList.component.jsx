import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDidMount from '../../common/hooks/use-didmount';
import useDebounce from '../../common/hooks/use-debounce';
import { getProductsDispatchAction } from '../../application/store/products/dispatchers';
import InputBox from '../../common/components/core/input-box';
import MessageText from '../../common/components/core/message-text';
import Spinner from '../../common/components/core/spinner';
import Grid from '../../common/components/shared/grid';
import { wait } from '../../common/utils/timers';
import {
  WrapperContainer,
  SearchContainer,
  ProductsContainer
} from './ProductsList.styled';

const ProductsList = () => {
  /** Hooks */
  const dispatch = useDispatch();

  /** States */
  const products = useSelector((state) => state.products.list);

  /** Local state */
  const [currentProducts, setCurrentProducts] = useState(
    products.length ? products : []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  /** Custom hook */
  const debounceSearchValue = useDebounce({ value: searchValue });

  /** Effects */
  useDidMount(() => {
    if (!products.length) {
      dispatch(getProductsDispatchAction());
    } else {
      wait(() => setIsLoading(false));
      setCurrentProducts(products);
    }
  }, [products]);

  useDidMount(() => {
    if (!isLoading) {
      if (searchValue) {
        const searchItems = products.filter((product) => {
          return (
            product.brand.toLowerCase().includes(searchValue) ||
            product.model.toLowerCase().includes(searchValue)
          );
        });
        setCurrentProducts(searchItems);
      } else {
        setCurrentProducts(products);
      }
    }
  }, [debounceSearchValue]);

  /** Events */
  const onSearch = (value) => setSearchValue(value.toLowerCase());

  return (
    <WrapperContainer>
      <SearchContainer>
        <InputBox
          inputId="outlined-search"
          inputText="Buscar"
          inputType="search"
          inputColor="primary"
          inputFunc={onSearch}
        />
      </SearchContainer>
      <ProductsContainer>
        {!isLoading ? (
          currentProducts.length ? (
            <Grid list={currentProducts} />
          ) : (
            <MessageText text={'No se han encontrado resultados.'} />
          )
        ) : (
          <Spinner />
        )}
      </ProductsContainer>
    </WrapperContainer>
  );
};

export default ProductsList;
