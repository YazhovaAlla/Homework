var inputArray = ['Vasya', 'Petya', 'Erzy'];

var nameObj = inputArray.map(function (item) {
        return {name: item};
    });

console.log (nameObj);