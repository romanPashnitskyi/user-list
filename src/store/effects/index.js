import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './users.effects';

export default function* rootSaga() {
  yield all([
    fork(usersSaga)
  ]);
}
