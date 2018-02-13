import * as Actions from 'constants/actions';
import { getFetch } from 'config/fetch';

export const findOffers = (values) => async (dispatch) => {
  console.log(values)
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

  console.log(validValues);

  try {
    return await dispatch({
      type: "FIND_OFFERS",
      promise: getFetch('POST', `/find_offers/`, validValues),
      payload: validValues
    })
  } catch (error) {
    console.log(error);
  }
};