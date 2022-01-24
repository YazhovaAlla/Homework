function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function (number) {
        return number > 0;
    });
    return newArr;
};

filterNumbersArr([-1, 0, 2, 34, -2]);
