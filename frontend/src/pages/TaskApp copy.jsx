
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadTasks, removeTask, saveTask, startTask } from '../store/actions/taskAction'
import { TaskList } from '../cmps/TaskList'

class _TaskApp extends Component {
    state = {
        filterBy: null,
        task: {
            title: '',
            description: '',
            importance: ''
        },
        msgWarning: '',
    }

    componentDidMount() {
        // const emptyTask = taskService.getEmptyBox();
        // this.setState({ task: emptyTask });
        this.props.loadTasks(this.state.filterBy);
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadTasks())
    }

    onDelete = (ev, taskId) => {
        ev.stopPropagation();
        this.props.removeTask(taskId);
    }

    printMsg(msg) {
        this.setState({ msgWarning: msg });
        setTimeout(() => {
            this.setState({ msgWarning: '' });
        }, 2000)
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => {
            return {
                task: {
                    ...prevState.task,
                    [field]: value
                }
            }
        })
    }

    onSubmit = async (ev) => {
        ev.preventDefault();
        if (!this.state.task.title) {
            this.printMsg('Title of task is required');
            return;
        }
        if (!this.state.task.importance) {
            this.printMsg('Importance of task is required');
            return;
        }

        await this.props.saveTask(this.state.task);
        this.setState({
            task: {
                title: '',
                description: '',
                importance: ''
            },
        })
        this.props.loadTasks();
    }

    onStart = async (ev, task) => {
        console.log("onStart -> task", task)
        ev.stopPropagation();
        await this.props.startTask(task);
        this.props.loadTasks();
    }

    render() {
        const { tasks } = this.props;
        const { task } = this.state;
        if (!tasks) return <h1>Loading..</h1>
        return (
            <section className="task-app main-container">
                <h1>Tasks</h1>
                <TaskList tasks={tasks} onDelete={this.onDelete} onStart={this.onStart} />
                <form onSubmit={this.onSubmit}>
                    <button type="submit" className="btn-add">Add Task</button>
                    <input
                        autoComplete="off"
                        autoFocus
                        type="txt"
                        value={task.name}
                        name="title"
                        onChange={this.handleInput}
                        placeholder="Write a title for this task:"
                    />
                    <input
                        autoComplete="off"
                        type="txt"
                        value={task.description}
                        name="description"
                        onChange={this.handleInput}
                    />
                    <input
                        type="number"
                        name="importance"
                        min="1" max="3"
                        onChange={this.handleInput}
                    />
                </form>
                {this.state.msgWarning && <label className="msg-warnning">{this.state.msgWarning}</label>}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.taskReducer.tasks
    }
}

const mapDispatchToProps = {
    loadTasks,
    removeTask,
    saveTask,
    startTask
}
export const TaskApp = connect(mapStateToProps, mapDispatchToProps)(_TaskApp)