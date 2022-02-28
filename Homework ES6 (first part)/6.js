function countVowelLetters(text) {
    text = text.toLowerCase().split('');

    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    let counter = 0;
    text.forEach(item => {
            if (vowelLetters.includes(item)) {
                counter++;
            }
        }
    );
    return counter;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');