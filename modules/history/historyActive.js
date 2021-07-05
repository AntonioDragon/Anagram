import { blockOuputHistory } from './historyMain';

function anagramCreateDomHistory(first, second, str) {
    let historyAnagram = document.createElement('li');
    historyAnagram.className = 'history';
    historyAnagram.innerHTML = `${first} ${second} ${str}`;
    blockOuputHistory.lastElementChild.append(historyAnagram);
}

export default anagramCreateDomHistory;