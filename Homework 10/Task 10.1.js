function Animal(name) {
    this._foodAmount = 50;
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

this.name = name;

Animal.prototype.animalFeed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}


function Cat() {
    Animal.prototype.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var catFeed = Animal.prototype.animalFeed;
Cat.prototype.animalFeed = function () {
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
// barsik.animalFeed();
// barsik.dailyNorm(150);
barsik.animalFeed().stroke().stroke().animalFeed();
