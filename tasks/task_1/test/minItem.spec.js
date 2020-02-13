const minItem = require('../minItem');
const expect = require('chai').expect;

describe('Example - Find an index of a minimal item of an array', () => {

    it("should return an index from an array", () => {
        expect(minItem([2,4,5,1,2])).to.equal(3);
    });

    it("should return the first index", () => {
        expect(minItem([1,4,5,6,2])).to.equal(0);
    });

    it("should return the last index", () => {
        expect(minItem([8,4,5,6,1])).to.equal(4);
    });

});