import * as Actions from 'constants/actions';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.GET_USER_CHATS_SUCCESS:
      return payload.payload;

    default:
      return state;
  }
}
