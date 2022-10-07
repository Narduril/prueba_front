import { useEffect, useState } from 'react';
import useDebounce from '../../common/hooks/use-debounce/use-debounce';
import InputBox from '../../common/components/core/input-box';
import Grid from '../../common/components/shared/grid';
import {
  WrapperContainer,
  SearchContainer,
  ProductsContainer
} from './ProductsList.styled';

const ProductsList = () => {
  /** Local state */
  const [searchValue, setSearchValue] = useState('');

  /** Custom hook */
  const debounceSearchValue = useDebounce({ value: searchValue });

  /** Effects */
  useEffect(() => {
    console.log(searchValue);
  }, [debounceSearchValue]);

  /** Events */
  const onSearch = (value) => setSearchValue(value);

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
        <Grid />
      </ProductsContainer>
    </WrapperContainer>
  );
};

export default ProductsList;
