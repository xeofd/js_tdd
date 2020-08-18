// Imports
const assert = require('assert');
const Room = require('../room');

// Descibes
describe("Room:", function(){
    // Set up
    let room;
    beforeEach(function(){
        room = new Room(6);
    });

    // Tests

    // Test 1:
    it("- should have area in sq-meters", function(){
        // Act
        const actual = room.area;

        // Assert
        assert.strictEqual(actual, 6);

    });

    // Test 2:
    it("should start not painted", function(){
        // Act
        const actual = room.painted;

        // Assert
        assert.strictEqual(actual, false);
        
    });

    // Test 3:
    it("should be able to be painted", function(){
        // Act
        room.getPainted();
        const actual = room.painted

        // Assert
        assert.strictEqual(actual, true);

    });

});


