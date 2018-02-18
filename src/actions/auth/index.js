import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT, REMIND_PASSWORD_ENDPOINT } from 'constants/api';

export const login = (values) => async (dispatch) => {
  try {
    return await dispatch({
      type: Actions.LOGIN_USER,
      promise: getFetch('POST', LOGIN_ENDPOINT, values),
      payload: values
    })
  } catch (error) {
    console.log(error);
  }
};

export const singUp = (values) => async (dispatch) => {
  try {
    return await dispatch({
      type: Actions.SIGN_UP_USER,
      promise: getFetch('POST', SIGNUP_ENDPOINT, values),
      payload: values
    })
  } catch (error) {
    console.log(error);
  }
}

export const remindPassword = (values) => async (dispatch) => {
  try {
    return await dispatch({
      type: Actions.REMIND_PASSWORD,
      promise: getFetch('POST', REMIND_PASSWORD_ENDPOINT, values),
      payload: values
    })
  } catch (error) {
    console.log(error);
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: Actions.LOGOUT });
  }
}