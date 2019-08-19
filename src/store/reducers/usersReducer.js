const initialState = {
  users: [],
  name: '',
  error: null,
  message: null,
  loading: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_REQUEST':
      return {
        ...state
      };
    case 'USERS_SUCCESS':
      return {
        ...state,
        users: [...action.payload]
      };
    case 'USERS_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    case 'ADD_USERS_REQUEST':
      return {
        ...state
      };
    case 'ADD_USERS_SUCCESS':
      return {
        ...state,
        name: action.payload.name,
        message: true
      };
    case 'ADD_USERS_FAILURE':
      return {
        ...state,
        error: action.payload,
        message: false
      };
    case 'DELETE_USERS_REQUEST':
      return  {
        ...state
      };
    case 'DELETE_USERS_SUCCESS':
      return {
        ...state,
        users: [...state.users.filter(user => action.payload !== user._id)]
      };
    case 'DELETE_USERS_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    case 'EDIT_USERS_REQUEST':
      return  {
        ...state,
        loading: true
      };
    case 'EDIT_USERS_SUCCESS':
      return  {
        ...state,
        loading: false,
        users: [...state.users.map(user => action.payload._id === user._id ? user = action.payload : user)]
      };
    case 'EDIT_USERS_FAILURE':
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
