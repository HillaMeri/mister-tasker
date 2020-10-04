
import httpService from './httpService';

export const taskService = {
    query,
    getById,
    remove,
    save,
    start
}

async function query(filterBy) {
    // if (filterBy) var queryStr = `?name=${filterBy.name}&inStock=${filterBy.inStock}&type=${filterBy.type}&sortBy=${sortBy}`;
    var queryStr = '';
    const tasks = await httpService.get(`task${queryStr}`);
    return tasks;
}

async function getById(taskId) {
    return httpService.get(`task/${taskId}`);
}

async function remove(taskId) {
    return httpService.delete(`task/${taskId}`);
}

async function save(task) {
    if (task._id) {
        return httpService.put(`task/${task._id}`, task);
    } else {
        task.triesCount = 0;
        task.lastTriedAt = null;
        task.doneAt = null;
        return httpService.post(`task`, task);
    }
}

async function start(task){
    console.log("start -> task", task)
    return httpService.put(`task/${task._id}/start`, task);
}