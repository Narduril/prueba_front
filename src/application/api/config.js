/** Configuración endpoints */
export const baseURL = 'https://front-test-api.herokuapp.com';
const apiParam = '/api';

export const config = {
  products: {
    endpoints: {
      getProducts: {
        method: 'GET',
        request: `${apiParam}/product`,
        headers: { 'Content-Type': 'application/json' }
      }
    }
  },
  product: {
    endpoints: {
      getProductDetails: {
        method: 'GET',
        request: `${apiParam}/product`,
        headers: { 'Content-Type': 'application/json' }
      }
    }
  },
  cart: {
    endpoints: {
      addCart: {
        method: 'POST',
        request: `${apiParam}/cart`,
        headers: { 'Content-Type': 'application/json' }
      }
    }
  }
};
