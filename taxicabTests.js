var chai = require('chai');
var assert = chai.assert;
//var taxicabDistance = require('./taxicabDistance.js');
var taxicabDistanceTwice = require('./taxicabDistance.js');

xdescribe('taxicabDistance', function() {
    it('should return 0 for an empty string', function() {
        assert.equal(0, taxicabDistance(""));
    });
    it('should process one step correctly', function() {
        assert.equal(3, taxicabDistance("L3"));
    });
    it('should process two steps correctly', function() {
        assert.equal(6, taxicabDistance("L3, R3"));
    });
    it('should account for backtracking', function() {
        assert.equal(3, taxicabDistance("L3, L3, L3"));
    });
    it('should return 0 for a loop', function() {
        assert.equal(0, taxicabDistance("L3, L3, L3, L3"));
    })
    it('should process multiple-digit steps correctly', function() {
        assert.equal(292, taxicabDistance("L284, R8"));
    })
    it('should process more complex strings correctly', function () {
        assert.equal(12, taxicabDistance("R5, L5, R5, R3"));
    })
    it('should throw an error for bad input', function() {
        assert.throws(() => {taxicabDistance("FJFE;");}, Error, "Incorrect directions format");
    });
});

describe('taxicabDistanceTwice', function () {
    it('should throw error if no location visited twice', function() {
        assert.throws(() => {taxicabDistanceTwice("L5");}, Error, "No location visited twice");
    })
    it('should return 0 for a cycle', function () {
        assert.equal(0, taxicabDistanceTwice("L3, L3, L3, L3"));
    })
    it('should pass a simple path', function () {
        assert.equal(4, taxicabDistanceTwice("R8, R4, R4, R8"));
    })
    it('should give the first if there are multiple locations visited twice', function () {
        assert.equal(5, taxicabDistanceTwice("L6, R2, R1, R2, L1, L2"));
    })
})