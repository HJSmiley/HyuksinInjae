namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  // const val1 = undefined;
  // const val2 = 10;
  // const result = val1 ?? val2;
  // const result = val1 != null ? val1 : val2;

  // const count = !car ? 0
  // : !car.wheels ? 0
  // : !car.wheels.count ? 0
  // : car.wheels.count;
}

// value = 조건1 ? statement1 : 조건2 ? statement2 : statement3;
