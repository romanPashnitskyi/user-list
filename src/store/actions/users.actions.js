let data = {};

export const fetchData = (name, error, message) => dispatch => {
  data.name = name;

  fetch(`http://localhost:8081/api/user`, {
    method: 'POST',
    body: JSON.stringify({
      name: name
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response  => {
    if (!response.ok) {
      throw new Error();
    }
  }).then(response  => {
    data.message = true;
    dispatch({
      type: 'FETCH_DATA_FULFILLED',
      payload: data
    })
  }).catch(error => {
    data.error = true;
    dispatch({
      type: 'FETCH_DATA_REJECTED',
      payload: data
    });
  });

  data.error = null;
};

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

export const AddUsersRequest = user => {
  return {
    type: 'ADD_USERS_REQUEST',
    payload: user
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
