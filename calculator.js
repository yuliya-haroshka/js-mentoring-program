class Claculator {
  constructor(){
  }

  static checkIfArgsAreNumbers(a, b) {
    const firstArgType = typeof a;
    const secondArgType = typeof b;
    if (firstArgType === 'number' && secondArgType === 'number') {
      return;
    }
    throw Error(`Both arguments are not of type number! First argument is [${firstArgType}, second argument is [${secondArgType}]]!`);
  }

  static add(a, b) {
    this.checkIfArgsAreNumbers(a, b);
    return a + b;
  };

  static subtract(a, b) {
    this.checkIfArgsAreNumbers(a, b);
    return a - b;
  }

  static multiply(a, b) {
    this.checkIfArgsAreNumbers(a, b);
    return a * b;
  }

  static devide(a, b) {
    this.checkIfArgsAreNumbers(a, b);
    return a / b;
  }

  static factorial(n) {
    const typeOfArg = typeof n;
    if (typeOfArg === 'number') {
      if (n === 0) {
        return 1;
      }
      return n * this.factorial (n - 1);
    }
    throw Error(`Argument is not of type number! It is of type [${typeOfArg}]!`);
  }
}
