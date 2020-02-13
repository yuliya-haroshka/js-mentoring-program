const reverseString = require('../reverseString');
const expect = require('chai').expect;

describe('Task 1 - Reverse a string', () => {

    it("should throw an error if parameter is not a string", () => {
        expect(reverseString(123)).to.equal('This is not a string!');
    });

    it("should reverse a string", () => {
        expect(reverseString('hello')).to.equal('olleh');
    });
});