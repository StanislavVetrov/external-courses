function insertStringToPosition (string1, string2, position) {
    let arr = string1.split(' ');
    arr[position] += ' ' + string2;
    let output = '';
    for(i=0;i<arr.length;i++){
        output += arr[i] + ' '; 
    }
    output = output.trimEnd();
    return output
}

module.exports = insertStringToPosition;