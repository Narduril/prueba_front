import { FormControl, MenuItem, Select, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  WrapperActions,
  SelectsContainer,
  Selectors,
  Text,
  ButtonContainer
} from './Actions.styled';

const Actions = ({ product, codes, handleChange, handleAddCart }) => {
  return (
    <WrapperActions>
      <SelectsContainer>
        <Selectors>
          <Text>
            <b>Almacenamiento:</b>
          </Text>
          <FormControl sx={{ width: '100%' }}>
            <Select
              name="storageCode"
              value={codes.storageCode}
              onChange={handleChange}
            >
              {product.options.storages.map((storage) => {
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
              value={codes.colorCode}
              onChange={handleChange}
            >
              {product.options.colors.map((color) => {
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
    </WrapperActions>
  );
};

export default Actions;
