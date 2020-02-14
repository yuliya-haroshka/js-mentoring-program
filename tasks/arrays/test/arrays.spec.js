const { expect } = require('chai');
const {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson
} = require('../arrays');

describe('getCharactersNames', () => {
    it('should return 3 if passing 1 and 2', () => expect(add(1, 2)).to.equal(3));
});
