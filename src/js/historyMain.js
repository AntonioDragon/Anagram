var button__history = document.querySelector('.block-button__history');
var blockOuputHistory = document.querySelector('.block-history');

var historyAnagramNull = document.createElement("p");
historyAnagramNull.className = 'historyAnagramNull';
historyAnagramNull.innerHTML = "История проверки Анограмм пуста";

var activeAccordion = 'block-history--active';
var buttonActive = 'history-active';

var arrayAnagram = [];

button__history.addEventListener('click', () => {
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
module.exports = {
    anagramCreateDomHistory,
    historyAnagramNull,
    arrayAnagram
};