import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DescriptionIcon from '@material-ui/icons/Description';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
export function TaskPreview(props) {
    const { task } = props;
    const date = new Date(task.createdAt);
    const dateToString = date.toLocaleString();
    return (
        <section className={`task-preview flex space-between ${task.doneAt ? 'done' : ''}`}>
            <div className= "flex">
                <div className="start-btn flex align-center">
                    {!task.doneAt &&
                        <button onClick={(ev) => props.onStart(ev, task)}><PlayCircleOutlineIcon /></button>}
                    {task.doneAt && <button ><DoneOutlineIcon /></button>}
                </div>
                <ul className="task-info clean-list">
                    <li className="task-title">{task.title}</li>
                    <li><DescriptionIcon/> Description</li>
                    <li><PriorityHighIcon/> Importance: {task.importance}</li>
                    <li><AccessTimeIcon /> Created At: {dateToString}</li>
                    <li><HourglassEmptyIcon/> Tries count: {task.triesCount}</li>
                </ul>
            </div>
            <div className="delete-btn flex align-center">
                <button onClick={(ev) => props.onDelete(ev, task._id)}><DeleteIcon /></button>
            </div>
        </section>
    )
}
