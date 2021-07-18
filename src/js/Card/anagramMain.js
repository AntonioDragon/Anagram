const { anagramCheck } = require("./anagramCheck.js");

var key = 0;
var output = "";

AnagramCheckMain = (inputFirst,inputSecond) =>{
    if (anagramCheck(inputFirst.value, inputSecond.value)) 
        output = {id: key ,value:`${inputFirst.value} является анаграммой ${inputSecond.value}`};
    else 
        output = {id: key ,value:`${inputFirst.value} не является  анаграммой ${inputSecond.value}`};
    key++;
    return output;
}

module.exports = {
    AnagramCheckMain
}