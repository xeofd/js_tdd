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

Decorator.prototype.canPaintRoom = function(room){
    const total = this.checkLiters();

    if (room.area <= total){
        return true;
    } else{
        return false;
    }
}

Decorator.prototype.paintRoom = function(room){
    if (this.canPaintRoom(room)){
        room.getPainted();
        this.stock.pop();
    }
}

// Export
module.exports = Decorator;