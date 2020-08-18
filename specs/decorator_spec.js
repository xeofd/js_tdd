// Imports
const assert = require('assert');
const Decorator = require('../decorator');

// Describes
describe("Decorator:", function(){
    
    // Set up
    let decorator;
    beforeEach(function(){
        decorator = new Decorator();
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
    xit("- should be able to add a can of paint to stock", function(){
        
    })
    
    // Test 3:
    xit("- should be able to calculate total liters of paint", function(){
        
    });

    // Test 4:
    xit("should be able to calculate whether there is enough paint to paint room", function(){

    });

    // Test 5:
    xit("should be able to paint room if enough paint", function(){
    });
})