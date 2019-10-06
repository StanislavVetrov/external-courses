function addProperty(property, object) {
  let copy = object;
  for(var key in copy){
      if(!(property in copy)){
       copy[property] = 'new';
      }    
  }
  return copy
  }
  
  module.exports = addProperty; module.exports = addProperty;
  