// Imports
const assert = require('assert');
const PaintCan = require('../paint_can.js');

// describes

describe("PaintCan:", function () {
    
    // Set up
    let paintCan;
    beforeEach(function() {
        paintCan = new PaintCan(5);
    });

    // Tests

    // Test 1:
    it("- should have a number of liters", function(){
        // Act
        const actual = paintCan.liters;

        // Assert
        assert.strictEqual(actual, 5);
    });
    
    // Test 2:
    it("- should be able to check if empty", function(){
        // Act
        const actual = paintCan.checkIfEmpty();

        // Assert
        assert.strictEqual(actual, false);
    });

    // test 3
    it("- should be able to empty itself", function() {
        // Act
        paintCan.emptyPaint();
        const actual = paintCan.checkIfEmpty();

        // Assert
        assert.strictEqual(actual, true);

    });
});