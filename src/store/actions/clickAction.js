export const someAction = (action) => dispatch => {
  dispatch({
    type: 'SOME_ACTION',
    payload: action
  })
};
