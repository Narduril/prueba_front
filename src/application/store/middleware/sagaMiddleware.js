import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from '..';

/** Saga Init */
const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware
];

/** Store Creation */
const store = configureStore({
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);

export default store;
