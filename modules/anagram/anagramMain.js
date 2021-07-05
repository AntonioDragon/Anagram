import { anagramCheck } from './anagramCheck.js';
import { anagramCreateDomHistory } from '../history/historyActive.js'
import {
    historyAnagramNull,
    arrayAnagram
} from '../history/historyMain.js';

var inputFirst = document.querySelector('.input-first');
var inputSecond = document.querySelector('.input-second');
var output = document.querySelector('.output');



document.querySelector('.card-button__anagram').addEventListener("click", () => {
    historyAnagramNull.remove();
    if (inputFirst.value == '' || inputSecond.value == '')
        output.value = 'Вы не ввели все данные';
    else
    if (anagramCheck(inputFirst.value, inputSecond.value)) {
        output.value = inputFirst.value + ' ' + 'является анаграммой' + ' ' + inputSecond.value;
        arrayAnagram.push([inputFirst.value, inputSecond.value, 'является анаграммой']);
        anagramCreateDomHistory(inputFirst.value, inputSecond.value, 'является анаграммой')
    } else {
        output.value = inputFirst.value + ' ' + 'не является анаграммой' + ' ' + inputSecond.value;
        arrayAnagram.push([inputFirst.value, inputSecond.value, 'не является анаграммой']);
        anagramCreateDomHistory(inputFirst.value, inputSecond.value, 'не является анаграммой')
    }

});

export {
    inputFirst,
    inputSecond
};