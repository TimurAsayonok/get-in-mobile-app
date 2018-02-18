import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';
import { LOGIN_ENDPOINT } from 'constants/api';

export const login = (values) => async (dispatch) => {
  console.log(values)
  try {
    return await dispatch({
      type: Actions.LOGIN_USER,
      promise: getFetch('POST', LOGIN_ENDPOINT, values),
      payload: JSON.stringify(values)
    })
  } catch (error) {
    console.log(error);
  }
};

export function logout() {
  return (dispatch) => {
    dispatch({ type: Actions.LOGOUT });
  }
}