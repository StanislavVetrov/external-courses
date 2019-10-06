function copyObject(object) {
    let storage = {};
    for (let key in object) {
      if(object.hasOwnProperty(key)){
        storage[key] = object[key];
      }      
    }
    return storage;    
  }
  
  module.exports = copyObject;
  