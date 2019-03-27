import uuidv4 from 'uuid/v4';
const SAGA_HEADER = `WATCH_SAGA_${uuidv4()}`;

const CovertToSagaType = type => `${SAGA_HEADER}${type}`; // saga watch 的 type,试图执行saga 的action,redux-saga watch
const CovertFromSagaType = type => type.replace(SAGA_HEADER, ""); // reducers 判断的 action.type

export {
    SAGA_HEADER,
    CovertToSagaType,
    CovertFromSagaType
};