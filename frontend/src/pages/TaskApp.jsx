
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { loadTasks, removeTask, saveTask, startTask, toggleModal } from '../store/actions/taskAction'
import { TaskList } from '../cmps/TaskList'
import { TaskAdd } from './TaskAdd'
import { socketService } from '../services/socketService'

class _TaskApp extends Component {
    state = {
        filterBy: null,
    }

    componentDidMount() {
        this.props.loadTasks(this.state.filterBy);
        socketService.setup();
        socketService.emit('update tasks');
        socketService.on('update tasks', this.props.loadTasks);
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadTasks())
    }

    onDelete = (ev, taskId) => {
        ev.stopPropagation();
        this.props.removeTask(taskId);
    }

    onStart = async (ev, task) => {
        ev.stopPropagation();
        await this.props.startTask(task);
        this.props.loadTasks();
    }

    openAddModal = () => {
        this.props.toggleModal(true);
    }

    render() {
        const { tasks, modalAdd } = this.props;
        if (!tasks) return <h1>Loading..</h1>
        return (
            <section className="task-app main-container">
                {/* <h1>Tasks</h1> */}
                <TaskList tasks={tasks} onDelete={this.onDelete} onStart={this.onStart} />
                <Fab className="btn-add" color="#ffe3b0" aria-label="add" onClick={this.openAddModal}>
                    <AddIcon  />
                </Fab>
                {/* <button className="btn-add" onClick={this.openAddModal}>
                    Add Task
                </button> */}
                {modalAdd && <TaskAdd />}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.taskReducer.tasks,
        modalAdd: state.taskReducer.modalAdd,
    }
}

const mapDispatchToProps = {
    loadTasks,
    removeTask,
    saveTask,
    startTask,
    toggleModal
}
export const TaskApp = connect(mapStateToProps, mapDispatchToProps)(_TaskApp)