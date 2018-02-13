import { createSelector } from 'reselect';

export const searchOffersSelector = createSelector(
  state => state.status.offersStatus,
  offersStatus => ({
    offersStatus
  })
);

export const resultsSelector = createSelector(
  state => state.entities.offers,
  offers => ({
    offers
  })
);