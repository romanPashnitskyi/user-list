const mainReducer = (state = {
  name: ''
}, action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      state = {
        ...state,
        name: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default mainReducer;
