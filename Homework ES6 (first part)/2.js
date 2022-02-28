let name = prompt('Введите имя пользователя');
const obj = {
    name,
    sayHi() {
        return `Hi, ${this.name}!`;
    }
};
console.log(obj.sayHi());