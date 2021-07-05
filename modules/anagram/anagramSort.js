var anagramSort = function (str) {
    str = str.replace(/\s+g/, '').toLowerCase()
        .split('').sort().join('');
    return str;
}

module.exports ={anagramSort};