import { AsyncStorage } from 'react-native';
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

const saveUserFilter = createFilter(
  'entities',
  ['user']
);

const notSaveStatus = createBlacklistFilter(
  'status',
  ['authStatus']
);

const persistConfig = {
  storage: AsyncStorage
};

export const persistRootConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['form'],
  transforms: [saveUserFilter, notSaveStatus]
};

export default persistConfig;