import { api } from 'constants/api';
import { store } from '../root';


export const getFetch = (method, endpoint, body) => {
  const user = store.getState().entities.user;

  console.log(`${method} ${api}${endpoint}, ${user ? user.access : ''}, ${body}`);
  return fetch(`${api}${endpoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
};