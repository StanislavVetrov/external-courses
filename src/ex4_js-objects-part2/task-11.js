function countEntries (string) {
  let arr = string.split('');
  let result = {};
  for (let i = 0; i < arr.length; ++i){
    let a = arr[i];
    if (result[a] !== undefined){
      ++result[a];
    } else{
      result[a] = 1;
    }      
  }
  for(key in result){
      console.log(`${key} meets ${result[key]} time(s)`);   
  }
}

module.exports = countEntries;