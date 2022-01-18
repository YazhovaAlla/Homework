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

function deepClone(objectToClone) {
    var newObject;

    if(Array.isArray(objectToClone)) {
        newObject = [];
    } else {
        newObject = {};
    }
    arrayOfKeys = Object.keys(objectToClone);
    for (let i of arrayOfKeys) {
        // console.log(typeof objectToClone[i]);
        if (typeof objectToClone[i] !== 'object' && typeof objectToClone[i] !== 'undefined') {
            newObject[i] = objectToClone[i];
        } else if ( typeof objectToClone[i] !== 'undefined' && objectToClone[i] !== null) {
            newObject[i] = deepClone(objectToClone[i]);
        }
    }
    return newObject;
}
let clonedObject = deepClone(initialObj);
console.log(clonedObject);