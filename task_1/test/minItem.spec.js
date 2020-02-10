const minItem = require('../minItem');
const expect = require('chai').expect;

describe('Example - Find an index of a minimal item of an array', () => {

    it("should return an index from an array", () => {
        expect(minItem([2,4,5,1,2])).to.equal(3);
    });

});