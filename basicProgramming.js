
// PRIMITIVE TYPE
let prInt = 10;
let prInt2 = prInt;
prInt2 = 25
// console.log(prInt)
// console.log(prInt2)

// REFERENCE TYPE
let refObj = {name: 'Milos'}
let refObj2 = refObj;
refObj2.name = 'Stefan'
// console.log(refObj.name)
// console.log(refObj2.name)


// HEAP STACK
const girl = {
	name: "milica",
	info: {age: 20, number: 123}
}

const newGirl = {...girl}

newGirl.info.age = 30;
newGirl.name = "dragana"

// console.log("girl:",girl.info.age,girl.name,"new girl:", newGirl.info.age, newGirl.name)






//FUNCTION PROGRAMING - high order function
const birthYear = [1975, 1997, 2002, 1995, 1985];

const ages = birthYear.map(age => 2018 - age)

// const ages = [];
for(let i = 0; i < birthYear.length; i++) {
  let age = 2018 - birthYear[i];
  ages.push(age);
}
// prints [ 43, 21, 16, 23, 33 ]
// console.log(ages);


// PROTOTYPE INHERITANCE
function personFunction(firstName, lastName) { //factory function
	return {
		firstName,
		lastName,
		greet: function(person) {
			return "hello" + firstName + " " + lastName 
		}
	}
}



var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
		console.log(2021 - this.yearOfBirth)
	}

var john = new Person("John", 1992, "design")
var maria = new Person("Maria", 1987, "miner")
var tyson = new Person("Tyson", 1968, "boxer")

maria.calculateAge()

























// DATA STRUCTURES


// LINKED LIST
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0
	}

	// insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head)
	}

	// insert last node 

	// insert at index

	// get at index

	// remove at index

	// clear list 

	// print list data
	printListData() {
		let current = this.head

		while(current) {
			console.log(current.data);
			current = current.next;
		}
	}
}
const ll = new LinkedList()

// ll.insertFirst(100)
// ll.insertFirst(200)
// ll.insertFirst(300)

// ll.printListData()


// STACK
class Stack {
	constructor() {
		this.items = []
		this.count = 0
	}

	push(e){
		this.items[this.count] = e;
		this.count += 1
		console.log(`${e} added to ${this.count}`)
		return this.count - 1
	}

	// return and remove top element in stack
	// return undefined if stack is empty
	pop() {
		if(this.count == 0) return undefined
		let deleteItem = this.items[this.count - 1]
		this.count -= 1
		console.log(`${deleteItem} removed`)
		return deleteItem
	}

	// check top element in stack
	peek() {
		console.log(`Top element is ${this.items[this.count -1]}`)
		return this.items[this.count - 1]
	}

	// check if stack is empty
	isEmpty() {
		console.log(this.count == 0 ? 'stack is empty' : 'stack is NOT empty')
		return this.count == 0
	}

	// check size of stack
	size() {
		console.log(`${this.count} element in stack`)
		return this.count
	}

	// print elements in stack
	print() {
		let str = ''
		for(let i = 0; i < this.count; i++) {
			str += this.items[i] + ' '
		}
		return str
	}

	// clear stack
	clear() {
		this.item = []
		this.count = 0
		console.log('Stack clear')
		return this.items
	}
}
const stack = new Stack()

// stack.push(100)
// stack.push(200)
// stack.push(400)

// stack.peek()

// stack.push(300)

// // stack.clear()

// console.log(stack.print())

// stack.pop()
// stack.pop()

// stack.size()





const addOne = (value) => value + 1;
const addTwo = (value) => addOne(value + 1);
const addThree = (value) => addTwo(value + 1);
const calculation = () => {
  return addThree(1) + addTwo(2);
};
 // console.log(calculation());
 // console.log(addThree(1));
 // console.log(addTwo(2));

//change string to int
let str = '404'
// console.log(+str)