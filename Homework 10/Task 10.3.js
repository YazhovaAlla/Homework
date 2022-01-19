var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var initialObj2 = {
    string: 'Vasya',
    number: 18,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Ivanov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

function objComplementarity(object1,object2) {
    arrayOfKeys1 = Object.keys(object1);
    arrayOfKeys2 = Object.keys(object2);
    for (var i of arrayOfKeys1) {
        if (object1[i] === object2[i] && typeof object1[i] !== 'object' &&
            typeof object1[i] !== 'undefined') {
            console.log('Объекты равны');
        } else if ( object1[i] !=== object2[i] ) {
            console.log('Объекты не равны');
        }
    }

}
