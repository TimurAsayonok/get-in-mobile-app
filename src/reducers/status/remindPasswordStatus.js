import * as Actions from 'constants/actions';

const initialState = {
  wasReminded: false,
  error: '',
  isFetching: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.REMIND_PASSWORD_START:
      return { ...state, isFetching: true };

    case Actions.REMIND_PASSWORD_SUCCESS:
      return { ...state, isFetching: false, wasReminded: true, error: '' };

    case Actions.REMIND_PASSWORD_FAIL:
      return { ...state, isFetching: false, error: payload };

    default:
      return state;
  }
}