const initialState = {
  name: '',
  error: null,
  message: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USERS_REQUEST':
      return {
        ...state
      };
    case 'ADD_USERS_SUCCESS':
      return {
        ...state,
        name: action.payload.name
      };
    case 'ADD_USERS_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    case 'FETCH_DATA_FULFILLED':
      return {
        ...state,
        name: action.payload.name,
        message: action.payload.message
      };
    case 'FETCH_DATA_REJECTED':
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default usersReducer;
