
export const checkResponse = (dispatch, response) => {
  console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return response.json ? response.json() : response;
  }

  return response.json().then((data) => {
    // const exception = new Error(response.statusText);
    // // exception.errorText = data.message;
    // // exception.status = data.status;
    throw data;
  });
};

function customMiddleware({ dispatch }) {
  return next => (action) => {
    const { promise, type, payload } = action;

    if (!promise) return next(action);

    dispatch({ type: `${type}_START`, payload });

    return promise
      .then(checkResponse.bind(null, dispatch))
      .then((result) => {
        console.log('HTTP RES: ', result);

        dispatch({ type: `${type}_SUCCESS`, payload: result });
        return result;
      })
      .catch((error) => {
        console.log('HTTP ERR: ', error);

        // dispatch({ type: `${type}_FAIL`, payload: error.errorText, status: error.status, customParams });
        dispatch({ type: `${type}_FAIL`, payload: error });
        return error;
      });
  };
}

export default customMiddleware;