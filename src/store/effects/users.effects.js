import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AddUserFailure, AddUsersSuccess} from '../actions/users.actions';
import { addUsers} from '../services/users.service';

function* addUsersRequest(request) {
  try {
    const data = yield call(addUsers, request.payload);
    console.log('data', data);
    yield put(AddUsersSuccess(data));
  } catch (err) {
    yield put(AddUserFailure(err));
  }
}

export function* usersSaga() {
  yield all([
    takeEvery('ADD_USERS_REQUEST', addUsersRequest),
  ]);
}
