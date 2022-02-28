const array = ['Alla', 23];

function f(name, age) {
    return `Hello, I'm ${name} and I'm ${age} years old.`
}

console.log(f(...array));