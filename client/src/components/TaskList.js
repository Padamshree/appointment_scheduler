import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tasks from './Tasks';
import { getTaskList } from '../actions/taskActions';

export default function TaskList() {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const { taskList } = task;

  useEffect(() => {
    if (taskList.length === 0) {
      dispatch(getTaskList());
    }
  }, [])

  return (
  <div>
    <h1>Appointment Scheduler</h1>
    <br />
    <div className='task-list'>
      {
        taskList && taskList.length > 0 &&
        taskList.map((task) => {
          let checkStatus = 'white';
          if (task.firstName || task.lastName || task.phone) {
            checkStatus = 'red';
          }
          return (
            <div key={task.createdAt}>
              <Tasks 
                {...task}
                status={checkStatus}
              />
            </div>
          )
        })
      }
    </div>
  </div>
  )
}
