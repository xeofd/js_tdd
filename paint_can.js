// Create constructor
const PaintCan = function(liters){
    this.liters = liters;
}

// Functions
PaintCan.prototype.checkIfEmpty = function () {
    if (this.liters === 0) {
        return true  
    } else {
        return false
    }
}

PaintCan.prototype.emptyPaint = function(){
    this.liters = 0;
}

// Export
module.exports = PaintCan;