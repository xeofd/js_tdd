// Create constructor
const Decorator = function(){
    this.stock = [];
}

// Functions
Decorator.prototype.addPaint = function (paintCan) {
    this.stock.push(paintCan);
}

Decorator.prototype.checkLiters = function(){
    let total = 0;

    for (let paint of this.stock){
        total = total + paint.liters;
    }

    return total;
}

// Export
module.exports = Decorator;