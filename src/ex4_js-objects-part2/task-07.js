function getStringThisSize ( string,number) {
  let result = "";
  if(string.length > number){
    result = string.substring(0,number-1) + '…';
    }
    return result
}

module.exports = getStringThisSize;