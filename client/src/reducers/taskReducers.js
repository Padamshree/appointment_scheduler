import { TASK_TYPES } from "../actions/task.types";

const initialState = {
    taskList: [],
    currentTask: {
        firsName: '',
        lastName: '',
        phone: '',
        taskDuration:'',
        id: '',
        createdAt: '',
    }
};

export default function taskReducers(state = initialState, action) {
    switch(action.type) {
        case TASK_TYPES.SET_TASK_LIST:
            return {
                ...state,
                taskList: action.payload
            };
        case TASK_TYPES.SET_TASK: 
            return {
                ...state,
                currentTask: action.payload
            };
        case TASK_TYPES.SET_FIRST_NAME: 
            return {
                ...state,
                currentTask: {
                    ...state.currentTask,
                    firstName: action.payload,
                }
            };
        case TASK_TYPES.SET_LAST_NAME: 
            return {
                ...state,
                currentTask: {
                    ...state.currentTask,
                    lastName: action.payload,
                }
            };
        case TASK_TYPES.SET_PHONE: 
            return {
                ...state,
                currentTask: {
                    ...state.currentTask,
                    phone: action.payload,
                }
            };
        case TASK_TYPES.CLEAR_SET_TASK:
            return {
                ...state,
                currentTask: initialState.currentTask,
            }
        default:
            return state;
    }
}
