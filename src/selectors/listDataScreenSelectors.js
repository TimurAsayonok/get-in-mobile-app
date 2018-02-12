import { createSelector } from 'reselect';

export const listDataSelector = createSelector(
  state => state.entities.listData,
  listData => ({
    listData: listData.payload
  })
);
