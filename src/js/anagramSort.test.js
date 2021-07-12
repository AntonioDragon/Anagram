const { anagramSort } = require('./anagramCheck');


test('Sorting anagram should return sorted string', () => {
    expect(anagramSort('торт')).toBe('ортт'),
    expect(anagramSort('гора')).toBe('агор'),
    expect(anagramSort('Борт')).toBe('борт'),
    expect(anagramSort('Шашлык')).toBe('аклшшы'),
    expect(anagramSort('Анаграмма')).toBe('аааагммнр'),
    expect(anagramSort('Кокамидопропилпропиленгликольдимонийхлоридфосфат')).toBe('аагдддеииииииийккклллллммннооооооооппппрррстффхь')
});