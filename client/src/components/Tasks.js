import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Tasks = (props) => {

    let history = useHistory();
    
    const editTask = () => {
        history.push(`/task/${props.id}`)
    }
    return (
        <div className="task-container" style={{ background: `${props.status}` }}>
            <div onClick={editTask}>
                <p><strong>{props.taskDuration}</strong></p>
                {
                    props.status === 'red' ? 
                    (<p>Slot Filled</p>) : (<p>Currently Empty</p>) 
                }
            </div>
        </div>
    );
}

export default Tasks;