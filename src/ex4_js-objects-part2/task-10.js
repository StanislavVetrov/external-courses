function reverseString (string) {
  let arr = string.split('');
  let output = '';
  for(let i = arr.length-1;i>=0;i--){
    output += arr[i];
  }
  return output    
} 

module.exports = reverseString;