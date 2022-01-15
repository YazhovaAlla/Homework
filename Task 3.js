function Animal(name) {
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50) {
            throw new Error("Животное умрёт от голода!");
        }
        if (amount > 100) {
            throw new Error("Животное лопнет!");
        }
        foodAmount = amount;
    }

    self.name = name;

    this.animalFeed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat() {
    Animal.apply(this, arguments);
    var catFeed = this.animalFeed;
    this.animalFeed = function () {
        catFeed();
        this.happy();
        return this;
    }
    this.happy = function () {
        console.log('Кот доволен ^_^');
    }
    this.stroke = function () {
        console.log('Гладим кота.') ;
        return this;
    }

}

var barsik = new Cat('Барсик');
// barsik.dailyNorm(75);
// barsik.animalFeed();
// barsik.dailyNorm(150);
barsik.animalFeed().stroke().stroke().animalFeed();