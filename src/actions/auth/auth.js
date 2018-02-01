import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';
import { TOKEN_ENDPOINT } from 'constants/api';

export function login(values) {
  return dispatch => new Promise((resolve, reject) => {
    dispatch({
      type: Actions.LOGIN_USER,
      promise: getFetch('POST', TOKEN_ENDPOINT, values),
      payload: values
    })
      .then(data => resolve(data))
      .catch(data => reject(data));
  });
}

// export function logout() {
  
// };