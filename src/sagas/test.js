import {
    put,
    takeEvery,
    all,
    call,
    delay,
    fork,
    take
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as Apis from '../api/doubanApi';

function* decrementAsync() {
    yield delay(2 * 1000);
    yield put({
        type: actionTypes.DECREMENT
    });
}

function* watchDecrementAsync() {
    yield takeEvery(actionTypes.WATCH_DECREMENT, decrementAsync);
}

function* watchIncrementAsync() {
    while (true) {
        yield take(actionTypes.WATCH_INCREMENT); // 监听saga的action,返回描述对象,再执行reducers的action
        yield delay(2 * 1000);
        let action = {
            type: actionTypes.INCREMENT
        };
        yield put(action); // 再执行reducers的action
    }
}

function* watchGetdoubanList() {
    //监听异步请求
    yield take(actionTypes.WATCH_DOUBAN_LIST); // 接收 saga 的 action
    let res = yield call(() => Apis.searchMovies());
    console.log('res===>>', res);
    let {
        data
    } = res;
    let action = {
        type: actionTypes.DOUBAN_LIST,
        count: data.count
    };
    yield put(action); // 再执行reducers的action
}

export default function* testSaga() {
    yield all([fork(watchIncrementAsync), fork(watchDecrementAsync), fork(watchGetdoubanList)]);
}