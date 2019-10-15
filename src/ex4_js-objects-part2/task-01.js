function searchInProto (property, object) {
  for(let key in object) {
    if(!(object.hasOwnProperty(key)) && key === property){
      return object[key];
    }
  }
  return undefined;
}

module.exports = searchInProto;