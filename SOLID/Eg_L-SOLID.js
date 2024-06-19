class Bird {
  fly() {
    console.log("Flying");
  }
}

class Duck extends Bird {
  fly() {
    console.log("Duck flying");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostrich cannot fly");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
makeBirdFly(duck); // Duck flying

const ostrich = new Ostrich();
makeBirdFly(ostrich); // Error: Ostrich cannot fly

//   In this example, Ostrich violates LSP because it cannot fly, which means it cannot be used as a substitute for Bird
