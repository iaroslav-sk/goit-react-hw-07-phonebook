import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import combineReducers from './contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: combineReducers,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;

// ========redux store withuout redux-toolkit=========//

// import { createStore } from 'redux';

// const store = createStore(
//   contactReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

//======================================================//
