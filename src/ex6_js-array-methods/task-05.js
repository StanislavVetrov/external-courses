function mapReWrite(array, callback) {
    let copy = [];
    for (let i = 0; i < array.length; i++) {
      copy.push(callback(array[i], i, array));
    }
    return copy;
  }
  
  module.exports = mapReWrite;
  