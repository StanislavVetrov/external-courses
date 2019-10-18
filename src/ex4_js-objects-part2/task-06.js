function firstLetterUpperCase(string) {
  let output = "";
  let array = string.split(" ");

  for (i = 0; i < array.length; i++) {
    output += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
  }
  output = output.trimEnd();
  return output;
}

module.exports = firstLetterUpperCase;
