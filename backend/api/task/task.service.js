const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const externalService = require('../../services/externalService')

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
    performTask,
    performTaskInterval
}

async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy)
    const criteria = {};
    const collection = await dbService.getCollection('task')
    try {
        var tasks = await collection.find(criteria).toArray();
        return tasks;
    } catch (err) {
        console.log('ERROR: cannot find tasks')
        throw err;
    }
}

async function getById(taskId) {
    const collection = await dbService.getCollection('task')
    try {
        const task = await collection.findOne({ "_id": ObjectId(taskId) })
        return task
    }
    catch (err) {
        console.log(`ERROR: while finding task ${taskId}`)
        throw err;
    }
}

async function remove(taskId) {
    const collection = await dbService.getCollection('task')
    try {
        await collection.deleteOne({ "_id": ObjectId(taskId) })
    } catch (err) {
        console.log(`ERROR: cannot remove task ${taskId}`)
        throw err;
    }
}

async function update(task) {
    const collection = await dbService.getCollection('task')
    task._id = ObjectId(task._id);
    try {
        await collection.replaceOne({ "_id": task._id }, task);
        return task;
    } catch (err) {
        console.log(`ERROR: cannot update task ${task._id}`);
        throw err;
    }
}

async function add(task) {
    const collection = await dbService.getCollection('task');
    try {
        task.createdAt = Date.now();
        await collection.insertOne(task);
        return task;
    } catch (err) {
        console.log(`ERROR: cannot insert task`)
        throw err;
    }
}


async function performTask(task) {
    const updateTask = { ...task };
    try {
        await externalService.execute(task);
        updateTask.doneAt = Date.now();
    } catch (error) {
        updateTask.lastTriedAt = Date.now();
    } finally {
        updateTask.triesCount++;
    }
    return update(updateTask);
}

async function performTaskInterval() {
    const collection = await dbService.getCollection('task');
    var tasksNotDone = await collection.find({ doneAt: null }).toArray();
    if (!tasksNotDone.length) return false;

    var tasksLessTries = [];
    var minTries = Infinity;
    for (let i = 0; i < tasksNotDone.length; i++) {
        if (tasksNotDone[i].triesCount === minTries) {
            tasksLessTries.push(tasksNotDone[i]);
        }
        else if (tasksNotDone[i].triesCount < minTries) {
            minTries = tasksNotDone[i].triesCount;
            tasksLessTries = [];
            tasksLessTries.push(tasksNotDone[i]);
        }
    }
    var taskMostImpor = tasksLessTries[0];
    for (let i = 1; i < tasksLessTries.length; i++) {
        if (tasksLessTries[i].importance > taskMostImpor.importance){
            taskMostImpor = tasksLessTries[i];
        }
    }
    console.log("performTaskInterval -> taskMostImpor", taskMostImpor)
    await performTask(taskMostImpor);
    return true;
}