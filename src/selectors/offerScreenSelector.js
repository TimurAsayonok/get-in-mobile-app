import { createSelector } from 'reselect';

export const offerSelector = createSelector(
  state => state.entities.user,
  user => ({
    userId: user._id,
    chosenOffers: user.chosenOffers
  })
);

export const chosenSelector = createSelector(
  state => state.entities.user,
  user => ({
    chosenOffers: user.chosenOffers
  })
);

export const chatsSelector = createSelector(
  state => state.entities.user,
  state => state.entities.chats,
  (user, chats) => ({
    userId: user._id,
    chats
  })
);