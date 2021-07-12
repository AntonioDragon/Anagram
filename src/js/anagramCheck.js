function anagramCheck(str1, str2) {
    if (str1 === undefined || str2 === undefined || str1.split('').length != str2.split('').length || str1.trim() === str2.trim()) {
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
        .split('').sort().join('');
    return str;
}


module.exports = {
    anagramCheck,
    anagramSort
}