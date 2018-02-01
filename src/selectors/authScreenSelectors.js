import { createSelector } from 'reselect';

export const authSelector = createSelector(
  state => state.status.authStatus,
  authStatus => ({
    authStatus
  })
);
