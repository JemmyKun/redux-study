import * as types from '../actions/actionTypes';

let init = 0;
const count = (count = init, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return ++init;
        case types.DECREMENT:
            return --init;
            // 异步api - test
        case types.DOUBAN_LIST:
            return action.count
        case types.DOUBAN_THEATERS:
            return action.count
        case types.DOUBAN_SOON:
            return action.count

        default:
            return count
    }
}

export default count;