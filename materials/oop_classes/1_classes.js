/**
 * A simple class definition for a class named "Car"
 */
const car = {
  brand: 'ford',
  year: 1994
};

/**
 * Create a class with methods
 */
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  present() {
    return `I have a car with the brand ${this.brand} and ${this.year} year`;
  }
  /**
 * Getters / setters
 */
  get myBrand() {
    return this.brand;
  }

  set myBrand(brand) {
    this.brand = brand;
  }

}

const myCar = new Car('ford', 1994);

