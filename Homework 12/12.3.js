function checkM(text) {
    var textLowerCase = text.toLowerCase();
    var mass = ['а', 'у', 'е', 'ы', 'о', 'э', 'я', 'и', 'ю', 'ё'];
    var result = textLowerCase
        .split('')
        .reduce((res, element) => (mass.indexOf(element) !== -1 ? ++res : res), 0);
    return result;
}
var str = prompt('Введите текст');
console.log(checkM(str));