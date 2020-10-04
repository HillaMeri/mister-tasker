import React from 'react'

import { TaskPreview } from './TaskPreview'


export function TaskList(props) {
    const { tasks } = props;
    if (!tasks) return <h1>Loading..</h1>
    return (
        <div className="task-list grid">
            {tasks.map(task => <TaskPreview key={task._id} task={task} onDelete={props.onDelete} onStart={props.onStart} />)}
        </div>
    )
}