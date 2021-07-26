import { TASK_TYPES } from "../actions/task.types";
import { get, post } from "../utils";

export const setTaskList = (taskList) => ({
    type: TASK_TYPES.SET_TASK_LIST,
    payload: taskList,
});

export const setTask = (task) => ({
    type: TASK_TYPES.SET_TASK,
    payload: task,
});

export const setPhone = (phone) => ({
    type: TASK_TYPES.SET_PHONE,
    payload: phone,
});

export const setFirstName = (firstName) => ({
    type: TASK_TYPES.SET_FIRST_NAME,
    payload: firstName,
});

export const setLastName = (lastName) => ({
    type: TASK_TYPES.SET_LAST_NAME,
    payload: lastName,
});

export const clearSetTask = () => ({
    type: TASK_TYPES.CLEAR_SET_TASK,
    payload: null,
})

export const getTaskList = () => (dispatch) => {
    get('/get_task_list')
    .then(res => res.json())
    .then(res => {
        if (res.success) {
            dispatch(setTaskList(res.taskList));
        }    
    })
    .catch(() => null);
}

export const getTask = (taskId) => (dispatch) => {
    get(`/get_task?taskId=${taskId}`)
    .then(res => res.json())
    .then(res => {
        dispatch(setTask(res.data))
    })
    .catch(() => null);
}

export const setNewTask = (data) => (dispatch) => {
    post('/set_new_task', data)
    .then(res => res.json())
    .then(res => {
        if (res.success) {
            dispatch(setTaskList(res.taskList));
            dispatch(clearSetTask());
        }
    })
    .catch(() => null);
}