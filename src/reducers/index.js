import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import user from './entities/user';

import authStatus from './status/auth';

export default combineReducers({
  entities: combineReducers({
    user
  }),
  status: combineReducers({
    authStatus
  }),
  form
});
