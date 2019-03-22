import {
    put,
    takeEvery,
    all,
    call,
    delay,
    fork,
    take
} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes';
import fetchAsync from '../api/fetch';

function* decrementAsync() {
    yield delay(2 * 1000);
    yield put({
        type: actionTypes.DECREMENT
    })
}

function* watchDecrementAsync() {
    yield takeEvery(actionTypes.WATCH_DECREMENT, decrementAsync)
}

function* watchIncrementAsync() {
    while (true) {
        yield take(actionTypes.WATCH_INCREMENT); // 监听saga的action,返回描述对象,再执行reducers的action
        yield delay(1 * 1000);
        let action = {
            type: actionTypes.INCREMENT
        }
        yield put(action); // 再执行reducers的action
    }
}

function* watchGetdoubanList() {
    while (true) {
        //监听异步请求
        let url = 'https://api.douban.com/v2/movie/top250';
        yield take(actionTypes.WATCH_DOUBAN_LIST); // 接收 saga 的 action
        const res = yield call(fetchAsync, url);
        console.log('res===>>', res);
        let action = {
            type: actionTypes.DOUBAN_LIST,
            count: res.count
        }
        yield put(action); // 再执行reducers的action
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchIncrementAsync),
        fork(watchDecrementAsync),
        fork(watchGetdoubanList)
    ]);
}