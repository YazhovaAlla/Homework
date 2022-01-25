function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
}

Animal.prototype._formatFoodAmount= function () {
    return this._foodAmount + ' гр.';
}


Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 50) {
        throw new Error("Животное умрёт от голода!");
    }
    if (amount > 100) {
        throw new Error("Животное лопнет!");
    }
    this._foodAmount = amount;
}


Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}


function Cat(name) {
    Animal.prototype.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var catFeed = Animal.prototype.feed;
Cat.prototype.feed = function () {
    catFeed();
    Cat.prototype.happy();
    return this;
};
Cat.prototype.happy = function () {
    console.log('Кот доволен ^_^');
};
Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
};


var barsik = new Cat('Барсик');
// barsik.dailyNorm(75);
// barsik.feed();
// barsik.dailyNorm(150);
barsik.feed().stroke().stroke().feed();
