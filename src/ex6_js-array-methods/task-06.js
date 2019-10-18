function reduceReWrite (array, callback, initialValue){
    if(arguments.length === 3){
        for(let i=0;i<array.length;i++){
            callback(initialValue, array[1], i, array);
        }

    } else if(arguments.length === 2) {
        for(let i=0;i<array.length;i++){
            callback(array[0], array[1], i, array);        
        }
    }
    return array;
}

module.exports = reduceReWrite;
