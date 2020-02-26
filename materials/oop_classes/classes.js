/**
 * A simple class definition for a class named "Car"
 */
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

/**
 * Create an object called "mycar" based on the Car class
 */
mycar = new Car("Ford");
console.log(mycar);

/**
 * Create a method named "present"
 */
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }
 
// mycar = new Car("Ford");
// console.log(mycar.present());

/**
 * Send a parameter to the "present()" method:
 */
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present(x) {
//     return x + ", I have a " + this.carname;
//   }
// }
  
// mycar = new Car("Ford");
// console.log(mycar.present("Hello"));

/**
 * Getters / setters
 */
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   get cnam() {
//     return this.carname;
//   }
//   set cnam(x) {
//     this.carname = x;
//   }
// }
// mycar = new Car("Ford");
 
// console.log(mycar.cnam());