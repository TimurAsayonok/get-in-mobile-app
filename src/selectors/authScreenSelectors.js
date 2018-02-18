import { createSelector } from 'reselect';

export const authSelector = createSelector(
  state => state.status.authStatus,
  authStatus => ({
    authStatus
  })
);

export const remindPasswordSelector = createSelector(
  state => state.status.remindPasswordStatus,
  remindPasswordStatus => ({
    remindPasswordStatus
  })
);
