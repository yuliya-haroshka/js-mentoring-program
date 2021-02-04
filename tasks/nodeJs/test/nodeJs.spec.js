const {jsonParser} = require('../parser/parser');
const {sendRequest} = require('../fetch/fetch');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Fetch method', () => {
	
	before(async () => {
		await sendRequest();
	});

	it('should receive items', async () => {
		const responseJson = require('../fetch/response.json');
		responseJson.forEach(item => expect(typeof item).to.equal('object'));
	});

	it('should contain ids below 20', async () => {
		const responseJson = require('../fetch/response.json');
		const ids = responseJson.map(item => item.id);
		ids.forEach(id => expect(id).to.be.below(20));
	});
	
});

describe('JSON Parser', () => {

	before(()=> {
		jsonParser();
	});

	it('.html should be replaced for every item', () => {
		const parserJson = require('../parser/parsed.json');
		expect(parserJson.every(item => item.docId.includes('html'))).to.equal(false);
	});
	
	it('every item should contain http://doc.epam.com/ string', () => {
		const parserJson = require('../parser/parsed.json');
		expect(parserJson.every(item => item.docId.includes('http://doc.epam.com/'))).to.equal(true);
	});

});