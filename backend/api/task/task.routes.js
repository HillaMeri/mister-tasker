const express = require('express')
const { getTasks, getTask, deleteTask, updateTask, addTask, performTask, performTaskInterval } = require('./task.controller');
const router = express.Router()

// middleware that is specific to this router

// const gIntervalTask = setInterval(async () => {
//     let preformRes = await performTaskInterval();
//     // if (!preformRes) {
//     //     clearInterval(gIntervalTask);
//     // }    
// }, 3000)

router.get('/', getTasks)
router.get('/:id', getTask)
router.put('/:id', updateTask)
router.put('/:id/start', performTask)
router.delete('/:id', deleteTask)
router.post('/', addTask)

module.exports = router