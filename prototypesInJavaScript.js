
const animalMethods = {
	eat(amount) {
		console.log(`${this.name} is eating`)
		this.energy += amount
	},

	sleep(length) {
		console.log(`${this.name} is sleeping`)
		this.energy += length
	},

	play(length) {
		console.log(`${this.name} is playing`)
		this.energy -= length
	},

}

Animal.prototype.play = function(length) {
	console.log(`${this.name} is playing`)
	this.energy += length;
}

function Animal (name, energy) {
	// lent animal = {}
	// let animal = Object.create(animalMethods)

	this.name = name
	this.energy = energy

	// return animal
}

const leo =  new Animal("leo", 10)
// const leo = Animal("leo", 10)
const wolf = Animal("wolf", 10)

// console.log(leo.play(2))
// console.log(leo.name)













//NESTED FUNCTIONS
function addSquares(a, b) {
  function square(x) {
    // console.log(x * x)

    return x * x;
  }
  // console.log(square(a) + square(b))
  return square(a) + square(b);
}
// a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
// c = addSquares(4, 5); // returns 41

console.log(b)