
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadTasks, saveTask, toggleModal } from '../store/actions/taskAction'

class _TaskAdd extends Component {
    state = {
        task: {
            title: '',
            description: '',
            importance: ''
        },
        msgWarning: '',
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
        this.props.loadTasks();

        this.setState({
            task: {
                title: '',
                description: '',
                importance: ''
            }
        })
        this.props.toggleModal(false);
    }

    onCloseModal = (ev) => {
        ev.stopPropagation();
        this.props.toggleModal(false);
    }

    render() {
        const { task } = this.state;
        return (
            <section className="task-add flex" onClick={(ev) => this.onCloseModal(ev)}>
                <form onClick={(ev) => { ev.stopPropagation() }} className="from-add flex column" onSubmit={this.onSubmit}>
                    <h2>New Task: </h2>
                    <label>Title:</label>
                    <input
                        autoComplete="off"
                        autoFocus
                        type="txt"
                        value={task.name}
                        name="title"
                        onChange={this.handleInput}
                    />
                    <label>Description:</label>
                    <input
                        autoComplete="off"
                        type="txt"
                        value={task.description}
                        name="description"
                        onChange={this.handleInput}
                    />
                    <label>Importance(1-3):</label>
                    <input className="input-impo"
                        type="number"
                        name="importance"
                        min="1" max="3"
                        onChange={this.handleInput}
                    />
                    <div className="msg-warnning">
                        {this.state.msgWarning && <label>{this.state.msgWarning}</label>}
                    </div>
                    <button type="submit" className="btn-add-task">Add Task</button>
                </form>
                {/* <button onClick={() => this.props.toggleModal(false)} className="btn-cancle">Cancle</button> */}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
    saveTask,
    loadTasks,
    toggleModal
}
export const TaskAdd = connect(mapStateToProps, mapDispatchToProps)(_TaskAdd)