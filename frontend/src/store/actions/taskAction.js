import { taskService } from "../../services/taskService"

export function loadTasks(filterBy) {
  return async dispatch => {
    const tasks = await taskService.query(filterBy);
    dispatch({ type: 'SET_TASKS', tasks })
  };
}

export function saveTask(task) {
  return async dispatch => {
    const actionType = task._id ? 'EDIT_TASK' : 'ADD_TASK';
    const _task = await taskService.save(task);
    dispatch({ type: actionType, task: _task })
  };
}

export function removeTask(taskId) {
  return async dispatch => {
    await taskService.remove(taskId)
    dispatch({ type: 'REMOVE_TASK', taskId })
  };
}
export function startTask(task) {
  return async dispatch => {
    await taskService.start(task)
    dispatch({ type: 'EDIT_TASK', task })
  };
}

export function toggleModal(modalStatus) {
  return async dispatch => {
    dispatch({ type: 'SET_MODAL', modalStatus })
  };
}