function randomNumInRange (min,max) {
    let num = Math.floor(Math.random()*(+max - +min)) + +min;
    return num
}

module.exports = randomNumInRange;