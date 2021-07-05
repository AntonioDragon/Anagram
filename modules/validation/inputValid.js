import {
    inputFirst,
    inputSecond
} from "../anagram/anagramMain"

inputFirst.addEventListener("input", () => {
    inputFirst.value = inputFirst.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІёЁ]/, '');
})

inputSecond.addEventListener("input", () => {
    inputFirst.value = inputFirst.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІёЁ]/, '');
})