import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import user from './entities/user';
import listData from './entities/listData';
import offers from './entities/offers';
import chats from './entities/chats';

import authStatus from './status/auth';
import offersStatus from './status/offersStatus';

export default combineReducers({
  entities: combineReducers({
    user,
    listData,
    offers,
    chats
  }),
  status: combineReducers({
    authStatus,
    offersStatus
  }),
  form
});
