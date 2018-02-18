import { createSelector } from 'reselect';

export const userSelector = createSelector(
  state => state.entities.user,
  user => ({
    user
  })
);