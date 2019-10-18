function upFirstChar(string) {
    let first = string.charAt(0);
    first = first.toLocaleUpperCase();
    return first.concat(string.substring(1));
  }
  
  module.exports = upFirstChar;
  