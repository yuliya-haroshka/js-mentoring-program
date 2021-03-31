const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
}

/**
 * call callbackFunctionError with ()=>{} callback
 * catch an error come from callbackFunctionError
 * throw new error with 'Intercepted Error' message
 */
function handleErrorCallback() {
}

/**
 * catch an error come from promiseFunctionError
 * throw new error with 'Intercepted Error' message
 */
function handlePromiseError() {
}

/**
 * catch an error come from promiseFunctionError using async/await
 * throw new error with 'Intercepted Error' message
 */
async function handleAsyncAwaitError() {
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
