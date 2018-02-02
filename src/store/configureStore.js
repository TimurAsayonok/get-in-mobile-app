import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import asyncMiddleware from 'redux-thunk';
import { customMiddleware } from './middlewares';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const composeEnhancers = composeWithDevTools({ suppressConnectErrors: false });

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(
  customMiddleware,
  asyncMiddleware,
  loggerMiddleware
))(createStore);


const getStore = () => {
  const store = autoRehydrate()(createStoreWithMiddleware)(rootReducer);

  return store;
};

export default getStore;