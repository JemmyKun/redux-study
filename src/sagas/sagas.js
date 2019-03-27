import {
    all
} from 'redux-saga/effects';

import testSaga from './test';
import douban from './douban';

export default function* rootSaga() {
    yield all([
        testSaga(),
        douban()
    ])
}