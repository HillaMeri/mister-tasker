

module.exports = {
    execute
}

function execute(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.8) resolve(task)
            else reject('Err');
        }, 0)
    })
}