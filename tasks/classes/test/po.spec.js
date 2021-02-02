const { BasePage, LoginPage } = require('../pageObject');
const { describe,it } = require('mocha');
const { expect } = require('chai');
const login = new LoginPage('www.test.com');

describe('Page Object', () => {
	
	it('LoginPage should inherite BasePage', () => {
		expect(Object.getPrototypeOf(LoginPage)).to.equal(BasePage);
	});

	it('url should be defined', () => {
		expect(login.baseUrl).not.to.be.undefined;
	});

	it('login should contain Footer', () => {
		expect(login).to.have.property('footer');
	});

	it('login should contain Header', () => {
		expect(login).to.have.property('header');
	});

	it('login should be able to review the Footer', () => {
		expect(login.footer.review()).to.contain('footer');
	});

	it('login page should be opened', () => {
		expect(login.open()).to.contain('login');
	});

	it('should be able to type an Email', () => {
		expect(login.typeEmail('test@test.com')).to.equal('type test@test.com into email');
	});

	it('should be able to type a Password', () => {
		expect(login.typePassword('abc')).to.equal('type abc into password');
	});

	it('should be able submit the form', () => {
		expect(login.clickSubmit()).to.contain('click');
	});

});