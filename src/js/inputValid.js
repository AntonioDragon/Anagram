var inputFirst = document.querySelector('.input-first');
var inputSecond = document.querySelector('.input-second');

inputFirst.addEventListener('input', () => {
    inputFirst.value = inputFirst.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІёЁ]/, '');
})

inputSecond.addEventListener('input', () => {
    inputFirst.value = inputFirst.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІёЁ]/, '');
})
