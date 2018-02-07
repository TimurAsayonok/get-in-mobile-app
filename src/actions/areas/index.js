import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';
import { LOGIN_ENDPOINT } from 'constants/api';

export const getAreas = () => async (dispatch) => {
  try {
    return await dispatch({
      type: Actions.GET_AREAS,
      promise: getFetch('GET', ''),
    })
  } catch (error) {
    console.log(error);
  }
};