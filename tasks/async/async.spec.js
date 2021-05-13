const { describe, it } = require('mocha');
const { expect } = require('chai');
const { myPromise, promise1, promise2 } = require('./async-api');

describe('Promises', () => {

	it('should resolve the promise', async () => {

		/**
		 * resolve the promise (do not forget to return it)
		 * handle the result as 'res' variable
		 */
		myPromise(true);

		/**
		 * place it inside the .then() block
		 * 
		 */
		 expect(res).to.equal('I am resolved');
		 
	});

	it('should reject the promise', async () => {

		/**
		 * handle the promise's rejection (do not forget to return in)
		 * and catch the result as 'res' variable
		 */
		myPromise();

		/**
		 * place it inside the .catch() block
		 * 
		 */
		expect(res).to.equal('I am rejected');
		 
	});

	it('should resolve the set of promises', async () => {

		/**
		 * Resolve these 2 functions using the Promise.all() (return it)
		 * Save the the result as 'res' variable
		 */
		promise1();
		promise2();


		/**
		 * and place 2 following expect()'s inside the .then() block
		 */
		 expect(res).to.include('promise1');
		 expect(res).to.include('promise2');
	});


});

describe('Async/await', () => {

	it('should resolve the promise using async/await', async () => {
		/**
		 * save the result as the variable 'res';
		 */
		//Place you code here:
		myPromise(true);


		// end of your code
		expect(res).to.equal('I am resolved');
	});

	it('should reject the promise using async/await', async () => {
		/**
		 * catch the error using the variable 'e'
		 * hint: use try..catch block
		 */
		//Place you code here:
		myPromise();


		// end of your code
		/**
		 * Place it inside the catch {} block
		 */
		expect(e).to.equal('I am rejected');
	});

	it('should resolve the set of promises using async/await', async () => {

		/**
		 * Handle these 2 functions using the Promise.all()
		 * Save the the result as 'res' variable
		 */
		//Place you code here:
		promise1();
		promise2();


		// end of your code
		 expect(res).to.include('promise1');
		 expect(res).to.include('promise2');
	});
});