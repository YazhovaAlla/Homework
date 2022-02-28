function countVowelLetters(text) {
    text = text.toLowerCase().split('');

    let vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
        counter = 0;

    for (let value of text) {
        if (vowelLetters.includes(value)) {
            counter++;
        }
    }

    return counter;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');