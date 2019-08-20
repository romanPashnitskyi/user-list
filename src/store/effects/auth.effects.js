import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LoginFailure, LoginSuccess, LogoutRequest, TokenFailure, TokenSuccess } from '../actions/auth.actions';
import { oauth, token } from '../services/auth.service';

function* login(request) {
    try {
        const data = yield call(oauth, request.payload);
        yield put(LoginSuccess(data));
    } catch (err) {
        yield put(LoginFailure(err));
        yield put(LogoutRequest());
    }
}

function* tokenRequest(request) {
    try {
        const data = yield call(token, request.payload);
        yield put(TokenSuccess(data));
    } catch (err) {
        yield put(TokenFailure(err));
    }
}

export function* authSaga() {
    yield all([
        takeEvery('LOGIN_REQUEST', login),
        takeEvery('TOKEN_REQUEST', tokenRequest)
    ]);
}
