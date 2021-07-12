const { anagramCheck } = require('./anagramCheck');

describe('Checking anagram', () => {
    test('should return true', () => {
        expect(anagramCheck('портим', 'импорт')).toBe(true),
            expect(anagramCheck('Тор', 'рот')).toBe(true),
            expect(anagramCheck('ПЫЛАЕМ', 'ПАМЕЛЫ')).toBe(true),
            expect(anagramCheck('ЖУТКАЯ', 'утяжка')).toBe(true),
            expect(anagramCheck('Марина', 'Армани')).toBe(true),
            expect(anagramCheck('Видал', 'Влади')).toBe(true),
            expect(anagramCheck('Ангола', 'налога')).toBe(true)
    });
    test('should return false', () => {
        expect(anagramCheck('Торт', 'горт')).toBe(false),
            expect(anagramCheck('Робот', 'кресло')).toBe(false),
            expect(anagramCheck('робот', 'сто')).toBe(false),
            expect(anagramCheck('Робот', 'Робот')).toBe(false),
            expect(anagramCheck('франция', 'ранец')).toBe(false),
            expect(anagramCheck('', '')).toBe(false),
            expect(anagramCheck('торт')).toBe(false),
            expect(anagramCheck()).toBe(false),
            expect(anagramCheck('Торт', '')).toBe(false)
    });
});