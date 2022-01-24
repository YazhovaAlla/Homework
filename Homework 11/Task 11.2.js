function filterNumbersArr(numbers) {
    var foundNum = numbers.find(function (number) {
        return number > 0;
    });
    return foundNum;
};

filterNumbersArr([-1, 0, 2, 34, -2]);