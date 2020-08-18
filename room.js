// Create constructor
const Room = function (area) {
    this.area = area;
    this.painted = false;
};

// Functions
Room.prototype.paintRoom = function () {
    this.painted = true;
};

// Export
module.exports = Room;