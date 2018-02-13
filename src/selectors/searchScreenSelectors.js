import { createSelector } from 'reselect';

export const searchOffersSelector = createSelector(
  state => state.status.offersStatus,
  offersStatus => ({
    offersStatus
  })
);
