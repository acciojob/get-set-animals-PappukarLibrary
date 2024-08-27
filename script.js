//complete this code
class Animal {
	  constructor(private _species: string) {}

  // Getter for the species
  get species(): string {
    return this._species;
  }

  // Method to log the sound the animal makes
  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Dog extends Animal {
	 constructor(species: string) {
    super(species);
  }

  // Method to log "woof"
  bark(): void {
    console.log("woof");
  }
	
}

class Cat extends Animal {
	 constructor(species: string) {
    super(species);
  }

  // Method to log "purr"
  purr(): void {
    console.log("purr");
  }
}
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
