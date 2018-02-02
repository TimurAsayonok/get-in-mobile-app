import { AsyncStorage } from 'react-native';
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

const saveUserFilter = createFilter(
  'entities',
  ['user']
);

const notSaveStatus = createBlacklistFilter(
  'status',
  ['auth']
);

const persistConfig = {
  storage: AsyncStorage,
  blacklist: ['form'],
  transforms: [saveUserFilter, notSaveStatus]
};

export default persistConfig;