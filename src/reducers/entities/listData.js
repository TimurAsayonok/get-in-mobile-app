import * as Actions from 'constants/actions';

const initialState = {
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.GET_LIST_DATA_SUCCESS:
      return payload;
    case Actions.GET_LIST_DATA_FAIL:
      return state;
    default:
      return state;
  }
}