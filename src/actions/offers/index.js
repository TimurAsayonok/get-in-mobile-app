import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';
import { FIND_OFFERS_ENDPOINT } from 'constants/api';

export const findOffers = (values) => async (dispatch) => {
  const validValues = {
    type: values.type,
    roomNumbers: values.room,
    location: values.location.type === 'area' ? {
      area: values.location.name
    } : {
      lat: values.location.lat || values.location.location.lat,
      lng: values.location.lng || values.location.location.lng
    },
    price: {
      from: values.from,
      to: values.to
    }
  }

  try {
    return await dispatch({
      type: Actions.FIND_OFFERS,
      promise: getFetch('POST', FIND_OFFERS_ENDPOINT, validValues),
      payload: validValues
    })
  } catch (error) {
    console.log(error);
  }
};