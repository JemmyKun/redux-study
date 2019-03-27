import {
    put,
    takeEvery,
    fork,
    call
} from 'redux-saga/effects';
import * as Type from '../actions/actionTypes';
import {
    CovertToSagaType,
    CovertFromSagaType
} from '../utils/saga-type';
import * as Apis from '../api/doubanApi';

function* handleDouban(param) {
    // 执行reducer 的 action.type
    const type = CovertFromSagaType(param.type);
    yield fork(getTopMovies, type); // fock 类似于 监听
}

function* getTopMovies(type) {
    const {
        data
    } = yield call(() => Apis.getTopMovies());
    let action = {
        type,
        count: data.count
    }
    yield put(action);
}

function* getTheatersMovies(param) {
    const {
        data
    } = yield call(() => Apis.getTheatersMovies()); // call 是调用接口
    let action = {
        type: CovertFromSagaType(param.type),
        count: data.count
    }
    yield put(action);
}

function* getSoonMovies(param) {
    const {
        data
    } = yield call(() => Apis.getSoonMovies());
    let action = {
        type: CovertFromSagaType(param.type),
        count: data.count
    }
    yield put(action); // put 类似于 dispatch
}

export default function* douban() {
    yield takeEvery(CovertToSagaType(Type.DOUBAN_LIST), handleDouban);
    yield takeEvery(CovertToSagaType(Type.DOUBAN_THEATERS), getTheatersMovies);
    yield takeEvery(CovertToSagaType(Type.DOUBAN_SOON), getSoonMovies);
}