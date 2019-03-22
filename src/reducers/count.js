import * as types from '../actions/actionTypes';

let init = 0;
const count = (count = init, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return ++init;
        case types.DECREMENT:
            return --init;
        default:
            return count
    }
}

export default count;