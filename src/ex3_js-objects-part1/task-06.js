function deepCopy(object) {
  let copy = {};
  for (var key in object) {
    if (Array.isArray(object)) {
      copy = [];
      for (let i = 0; i < object.length; i++) {
        copy[i] = deepCopy(object[i]);
      }
    } else if (typeof object[key] === "object") {
      copy[key] = deepCopy(object[key]);
    } else {
      copy[key] = object[key];
    }
  }
  return copy;
}

module.exports = deepCopy;
