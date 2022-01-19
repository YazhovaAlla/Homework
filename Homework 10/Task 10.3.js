var initialObj = {
    string: 'Vasya',
    number: 18,
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
    number: 30,
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
    var arrayOfKeys1 = Object.keys(object1);
    var arrayOfKeys2 = Object.keys(object2);
    var response = true;
    if (arrayOfKeys1.length !== arrayOfKeys2.length) {
        console.log('false');
        console.log(arrayOfKeys1.length, arrayOfKeys2.length);
        return false;
    }

    for (var i = 0; i < arrayOfKeys1.length; i++) {
        if (arrayOfKeys1[i] !== arrayOfKeys2[i]) {
            console.log('false1');
            console.log(arrayOfKeys1[i], arrayOfKeys2[i]);
            return false;
        }

        if (typeof object1[arrayOfKeys1[i]] !== 'undefined' && typeof object1[arrayOfKeys1[i]] !== 'object'
        && typeof object1[arrayOfKeys1[i]] !== 'function') {
            console.log(object1[arrayOfKeys1[i]], object2[arrayOfKeys2[i]]);

            if (object1[arrayOfKeys1[i]] !== object2[arrayOfKeys2[i]]) {
                console.log('false2');
                console.log(object1[arrayOfKeys1[i]], object2[arrayOfKeys2[i]]);
                return false;
            }
        } else if (typeof object1[arrayOfKeys1[i]] == 'function') {
            console.log(object1[arrayOfKeys1[i]], object2[arrayOfKeys2[i]]);

            if (object1[arrayOfKeys1[i]].toString() !== object2[arrayOfKeys2[i]].toString()) {
                console.log('false3');
                console.log(object1[arrayOfKeys1[i]].toString(), object2[arrayOfKeys2[i]].toString());
                return false;
            }
        }
        else if (typeof object1[arrayOfKeys1[i]] == 'object' &&  object1[arrayOfKeys1[i]] !== null &&
             object1[arrayOfKeys1[i]] !== undefined) {
            console.log(object1[arrayOfKeys1[i]], object2[arrayOfKeys2[i]]);

            response = objComplementarity(object1[arrayOfKeys1[i]], object2[arrayOfKeys2[i]]);
            if (response == false) {
                console.log('false4');
                return  false;
            }
        }
    }

    return  true;
}
console.log('Result of comparing: ' +  objComplementarity(initialObj, initialObj2));


