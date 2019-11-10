function filterReWrite(array, callback) {
    let copy =[];
      for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
          copy.push(array[i]);
        }
      }
      return copy;
    }
    module.exports = filterReWrite;
    