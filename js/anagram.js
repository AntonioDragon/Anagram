var inputFirst = document.querySelector('.input-first');
var inputSecond = document.querySelector('.input-second');
var output = document.querySelector('.output');

var button__history = document.querySelector('.block-button__history');
var blockOuputHistory = document.querySelector(".block-history");

var historyAnagramNull = document.createElement("p");
historyAnagramNull.className = 'historyAnagramNull';
historyAnagramNull.innerHTML = "История проверки Анограмм пуста";

var activeAccordion = "block-info--active";
var buttonActive = "history-active";

var arrayAnagram = [];


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

function anagramCheck(str1, str2) {
    if (str1.split('').length != str2.split('').length || str1.trim() === str2.trim()) {
        return false;
    } else {
        let sort_str1 = anagramSort(str1);
        let sort_str2 = anagramSort(str2);
        if (sort_str1 === sort_str2)
            return true;
        else
            return false;
    }
}

var anagramSort = function (str) {
    str = str.replace(/\s+g/, '').toLowerCase()
        .split('').sort().join();
    return str;
}



button__history.addEventListener("click", () => {
    button__history.classList.toggle(buttonActive);
    blockOuputHistory.classList.toggle(activeAccordion);
    historyAnagramNull.remove();
    document.querySelectorAll('.history').forEach((value) => {
        value.remove();
    })
    if (arrayAnagram.length != 0)
        arrayAnagram.forEach(element => {
            anagramCreateDomHistory(element[0], element[1], element[2]);
        })
    else
        blockOuputHistory.lastElementChild.append(historyAnagramNull);
});

function anagramCreateDomHistory(first, second, str) {
    let historyAnagram = document.createElement('li');
    historyAnagram.className = 'history';
    historyAnagram.innerHTML = `${first} ${second} ${str}`;
    blockOuputHistory.lastElementChild.append(historyAnagram);
}

inputFirst.addEventListener("input", () => {
    inputFirst.value = inputFirst.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІёЁ]/, '');
})

inputSecond.addEventListener("input", () => {
    inputFirst.value = inputFirst.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІёЁ]/, '');
})