import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth.effects';
import { usersSaga } from './users.effects';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(usersSaga)
  ]);
}
