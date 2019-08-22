export const UsersRequest = () => {
  return {
    type: 'USERS_REQUEST',
    payload: null
  };
};

export const UsersSuccess = data => {
  return {
    type: 'USERS_SUCCESS',
    payload: data
  };
};

export const UserFailure = err => {
  return {
    type: 'USERS_FAILURE',
    payload: err
  };
};

export const AddUsersRequest = (values) => {
  return {
    type: 'ADD_USERS_REQUEST',
    payload: {name: values.name, password: values.password}
  };
};

export const AddUsersSuccess = user => {
  return {
    type: 'ADD_USERS_SUCCESS',
    payload: user
  };
};

export const AddUserFailure = err => {
  return {
    type: 'ADD_USERS_FAILURE',
    payload: err
  };
};

export const DeleteUsersRequest = user => {
  return {
    type: 'DELETE_USERS_REQUEST',
    payload: user
  };
};

export const DeleteUsersSuccess = user => {
  return {
    type: 'DELETE_USERS_SUCCESS',
    payload: user
  };
};

export const DeleteUserFailure = err => {
  return {
    type: 'DELETE_USERS_FAILURE',
    payload: err
  };
};

export const EditUsersRequest = (id, name) => {
  return {
    type: 'EDIT_USERS_REQUEST',
    payload: {id, name}
  };
};

export const EditUsersSuccess = user => {
  return {
    type: 'EDIT_USERS_SUCCESS',
    payload: user
  };
};

export const EditUserFailure = err => {
  return {
    type: 'EDIT_USERS_FAILURE',
    payload: err
  };
};

export const UserStatusChanged = (name, status) => {
  return {
    type: 'USER_STATUS_CHANGED',
    payload: {name, status}
  };
};
