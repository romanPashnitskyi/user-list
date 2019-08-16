import { all, call, put, takeEvery } from 'redux-saga/effects';
import { UserFailure, UsersSuccess, AddUserFailure, AddUsersSuccess,
          DeleteUsersSuccess, DeleteUserFailure, EditUsersSuccess, EditUserFailure
        } from '../actions/users.actions';
import { getUsers, addUsers, deleteUsers, editUsers } from '../services/users.service';

function* usersRequest() {
  try {
    const data = yield call(getUsers);
    yield put(UsersSuccess(data));
  } catch (err) {
    yield put(UserFailure(err));
  }
}

function* addUsersRequest(request) {
  try {
    const data = yield call(addUsers, request.payload);
    yield put(AddUsersSuccess(data));
  } catch (err) {
    yield put(AddUserFailure(err));
  }
}

function* deleteUsersRequest(request) {
  try {
    const data = yield call(deleteUsers, request.payload);
    yield put(DeleteUsersSuccess(data.id));
  } catch (err) {
    yield put(DeleteUserFailure(err));
  }
}

function* editUsersRequest(request) {
  try {
    const data = yield call(editUsers, request.payload);
    yield put(EditUsersSuccess(data));
  } catch (err) {
    yield put(EditUserFailure(err));
  }
}

export function* usersSaga() {
  yield all([
    takeEvery('USERS_REQUEST', usersRequest),
    takeEvery('ADD_USERS_REQUEST', addUsersRequest),
    takeEvery('DELETE_USERS_REQUEST', deleteUsersRequest),
    takeEvery('EDIT_USERS_REQUEST', editUsersRequest)
  ]);
}
