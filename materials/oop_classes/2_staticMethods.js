/**
 * Create a static method and call it on the class
 */
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello!!";
  }
}
 
mycar = new Car("Ford");
 
//Call 'hello()' on the class Car:
console.log(Car.hello());
 
//and NOT on the 'mycar' object:
console.log(mycar.hello()); //this would raise an error.

/**
 * Send "mycar" as a parameter
 */
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   static hello(x) {
//     return "Hello " + x.carname;
//   }
// }

// mycar = new Car("Ford");
 
// console.log(Car.hello(mycar));