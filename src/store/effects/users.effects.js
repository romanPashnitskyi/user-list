import { all, call, put, takeEvery } from 'redux-saga/effects';
import { UserFailure, UsersSuccess, AddUserFailure, AddUsersSuccess} from '../actions/users.actions';
import { getUsers, addUsers} from '../services/users.service';

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

export function* usersSaga() {
  yield all([
    takeEvery('USERS_REQUEST', usersRequest),
    takeEvery('ADD_USERS_REQUEST', addUsersRequest)
  ]);
}
