import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import { customMiddleware } from './middlewares';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });


const getStore = () => {
  const store = Reactotron.createStore(rootReducer, compose((
    applyMiddleware(
      customMiddleware,
      thunkMiddleware,
      loggerMiddleware
    )
  )));

  return store;
};

export default getStore;