import {
    combineReducers
} from 'redux';
import {
    todo,
    inputValue
} from './todo';
import count from './count';

const rootReducers = combineReducers({
    todo,
    inputValue,
    count
});

export default rootReducers;