function findSubstring(string, phrase) {
    result = false;
    if (string.includes(phrase)) {
      result = true;
    }
    return result;
  }
  
  module.exports = findSubstring;
  