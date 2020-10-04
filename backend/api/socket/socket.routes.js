const { performTaskInterval } = require('../task/task.controller');

module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('update tasks', () => {
            console.log('here');
            const gIntervalTask = setInterval(async () => {
                const res = await performTaskInterval();
                // if(!res) clearInterval(gIntervalTask);   
                io.emit('update tasks');
            }, 3000)
        })
    })
}