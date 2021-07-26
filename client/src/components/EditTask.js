import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { 
    clearSetTask, 
    setFirstName, 
    setLastName, 
    setPhone, 
    setNewTask,
    getTask, 
} from '../actions/taskActions';

const EditTask = (props) => {

    let history = useHistory();

    const { taskId } = useParams();
    const dispatch = useDispatch();
    const task = useSelector((state) => state.task);

    const { currentTask: { firstName, lastName, phone, taskDuration } }= task;

    useEffect(() => {
        dispatch(getTask(taskId));
    }, []);

    const handleTask = () => {
        const data = {
            firstName,
            lastName,
            phone,
            taskId,
        }
        dispatch(setNewTask(data));
        history.push('/');
    }

    const cancelEdit = () => {
        history.push('/');
        dispatch(clearSetTask());
    }

    return (
        <div>
            <h3>{`Slot: ${taskDuration}`}</h3>
            <br />
            <TextField
                label="First Name"
                value={firstName || ''}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
            />
            <br />
            <br />
            <TextField
                label="Last Name"
                value={lastName || ''}
                onChange={(e) => dispatch(setLastName(e.target.value))}
            />
            <br />
            <br />
            <TextField
                label="Phone Number"
                value={phone || ''}
                onChange={(e) => dispatch(setPhone(e.target.value))}
            />
            <br />
            <br />
            <br />
            <div class='actions'>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleTask}
                >
                    Save
                </Button>
                <br />
                <br />
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={cancelEdit}
                >
                    Cancel
                </Button>
            </div> 
        </div>
        
    )
}

export default EditTask;