import { createSelector } from 'reselect';

export const offerSelector = createSelector(
  state => state.entities.user,
  user => ({
    userId: user._id,
    chosenOffers: user.chosenOffers
  })
);
