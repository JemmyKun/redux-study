import * as types from '../actions/actionTypes';

const setStorage = (name, data = []) => {
    window.localStorage.setItem(name, JSON.stringify(data))
};

const getStorage = (name) => {
    let storage = [];
    let data = window.localStorage.getItem(name);
    if (data) {
        storage = JSON.parse(data);
    }
    return storage;
}

const storageName = 'todoList';
let initList = getStorage(storageName);
let initId = 0;

const todo = (data = initList, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            let newItem = {
                name: action.name,
                cteateTime: Date.now(),
                id: initId++,
                isActive: false
            };
            let newData = [...data, newItem];
            setStorage(storageName, newData)
            return newData
        case types.DELETE_TODO:
            let index = action.index;
            data.splice(index, 1);
            let nData = [...data];
            setStorage(storageName, nData)
            return nData
        case types.ACTIVE_TODO_ITEM:
            let activeIndex = action.index;
            data.forEach((item, idx) => {
                if (activeIndex === idx) {
                    item.isActive = !item.isActive;
                }
            })
            let activeData = [...data];
            setStorage(storageName, activeData)
            return activeData
        default:
            return data
    }
}

let initValue = '';
const inputValue = (value = initValue, action) => {
    switch (action.type) {
        case types.CHNAGE_INPUT_VALUE:
            return action.value
        default:
            return initValue
    }
}

export {
    todo,
    inputValue
}