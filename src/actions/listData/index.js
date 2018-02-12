import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';

export const getData = (screen) => async (dispatch) => {
  try {
    return await dispatch({
      type: Actions.GET_LIST_DATA,
      promise: getFetch('GET', `/${screen}s`),
      payload: screen
    })
  } catch (error) {
    console.log(error);
  }
};