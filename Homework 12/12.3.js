function checkM(text) {
    var textLowerCase = text.toLowerCase();
    var mass = ['а', 'у', 'е', 'ы', 'о', 'э', 'я', 'и', 'ю', 'ё'];
    var result = textLowerCase
        .split('')
        .filter(element => mass.indexOf(element) !== -1);
    return result.length;
}
var str = prompt('Введите текст');
console.log(checkM(str));