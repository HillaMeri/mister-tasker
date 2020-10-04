const initialState = {
    tasks: [],
    modalAdd: false
}

export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                tasks: action.tasks
            }
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (action.task._id === task._id) return action.task
                    return task;
                })
            }
        case 'ADD_TASK':
            return {
                ...state, tasks: [...state.tasks, action.task]
            }
        case 'REMOVE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task._id !== action.taskId) }
        case 'SET_MODAL':
            return { ...state, modalAdd: action.modalStatus}
        default:
            return state
    }
}