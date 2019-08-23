const initialState = {
  page: 1,
  perPage: 5,
  users: [],
  total: null,
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
        users: [...action.payload.res.data.users],
        total: action.payload.res.data.total,
        page: action.payload.payload.page
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
    case 'USER_STATUS_CHANGED': {
      let users = state.users;
      let index = users.findIndex(u => u.name === action.payload.name);
      if(index !== -1) {
        users[index].status = action.payload.status;
        return { ...state, users: [...users] };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default usersReducer;
