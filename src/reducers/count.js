import * as types from '../actions/actionTypes';

let init = 0;
const count = (count = init, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return ++init;
        case types.DECREMENT:
            return --init;
        case types.DOUBAN_LIST:
            return action.count
        default:
            return count
    }
}

export default count;