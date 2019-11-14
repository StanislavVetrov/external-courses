function sliceReWrite(array, begin, end) {
  let copy = [];
  switch (arguments.length) {
    case 1: // array
      for (let i = 0; i < array.length; i++) {
        copy.push(array[i]);
      }
      return copy;

    case 2: // array & begin
      if (arguments[1] < 0) {
        arguments[1] = -arguments[1];
        arguments[1] = array.length - begin;
      }
      for (let i = begin; i < array.length; i++) {
        copy.push(array[i]);
      }
      return copy;

    default: // array,begin & end
      if (arguments[1] < 0) {
        arguments[1] = -arguments[1];
        arguments[1] = array.length - begin;
      }
      if (arguments[2] < 0) {
        arguments[2] = -arguments[2];
        arguments[2] = array.length - end;
      }
      for (let i = begin; i < end; i++) {
        copy.push(array[i]);
      }
      return copy;
  }
}
module.exports = sliceReWrite;
