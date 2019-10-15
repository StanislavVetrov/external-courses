function strToCamelCase(string) {
  let arr = string.split(" ");
  let output = "";  
  let lower = "";
  for (i = 0; i < arr.length; i++) {
    lower = arr[i].toLowerCase();
    output += lower.charAt(0).toUpperCase() + lower.slice(1);   
  }
  output = output.charAt(0).toLowerCase() + output.slice(1);
  return output;
}

module.exports = strToCamelCase;
