import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';
import { USER_ENDPOINT, CHOSEN_OFFER_ENDPOINT } from 'constants/api';

export const chooseOffer = (values) => async (dispatch) => {

  try {
    return await dispatch({
      type: Actions.ADD_CHOSEN_OFFER,
      promise: getFetch('PUT', `${USER_ENDPOINT}${values.userId}${CHOSEN_OFFER_ENDPOINT}`, { offerId: values.offerId}),
      payload: values
    })
  } catch (error) {
    console.log(error);
  }
};