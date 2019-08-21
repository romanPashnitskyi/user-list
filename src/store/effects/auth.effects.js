import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LoginFailure, LoginSuccess, LogoutRequest } from '../actions/auth.actions';
import { oauth } from '../services/auth.service';

function* login(request) {
    try {
        const data = yield call(oauth, request.payload);
        yield put(LoginSuccess(data));
    } catch (err) {
        yield put(LoginFailure(err));
        yield put(LogoutRequest());
    }
}

export function* authSaga() {
    yield all([
        takeEvery('LOGIN_REQUEST', login)
    ]);
}
