// Imports
const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');

// Describes
describe("Decorator:", function(){
    
    // Set up
    let decorator;
    let paintCan1;
    let paintCan2;
    beforeEach(function(){
        decorator = new Decorator();
        paintCan1 = new PaintCan(5);
        paintCan2 = new PaintCan(10);
    });

    // Tests

    // Test 1:
    it("- should start with no paint stock", function(){
        // Act
        const actual = decorator.stock;

        // Assert 
        assert.deepStrictEqual(actual, []);
    })
    
    // Test 2:
    it("- should be able to add a can of paint to stock", function(){
        // Act
        decorator.addPaint(paintCan1);
        const actual = decorator.stock.length
    
        // Assert
        assert.strictEqual(actual, 1);
    })
    
    // Test 3:
    it("- should be able to calculate total liters of paint", function(){
        // Arrange
        decorator.addPaint(paintCan1);
        decorator.addPaint(paintCan2);

        // Act
        const actual = decorator.checkLiters();
        // Assert
        assert.strictEqual(actual, 15);
    });

    // Test 4:
    xit("should be able to calculate whether there is enough paint to paint room", function(){

    });

    // Test 5:
    xit("should be able to paint room if enough paint", function(){
    });
})