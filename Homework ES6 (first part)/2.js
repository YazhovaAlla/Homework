let name = prompt('Введите имя пользователя');
const obj = {name, sayHi: () => `Hi, ${obj.name}!`};
console.log(obj.sayHi());