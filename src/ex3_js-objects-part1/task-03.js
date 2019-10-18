function checkIfPropertyExist(property, object) {
  if (object.hasOwnProperty(property)) {
    return true;
  }
  return false;
}

module.exports = checkIfPropertyExist;
