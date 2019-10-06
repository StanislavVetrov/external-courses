function printProperties(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key + " " + object[key]);
   }    
  }
}

module.exports = printProperties;
