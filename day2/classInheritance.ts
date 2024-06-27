class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount}`);
  }
}
class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motorcycle();
motorCycle.updateWheelCount(6);
motorCycle.showNumberOfWheels();
const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();
