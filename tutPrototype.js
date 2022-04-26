

// PROTOTYPE examples - before ES6
let PersonP = function(nm,id) {
	this.name = nm;
	this.id = id;
}
PersonP.prototype.getDetails = function() { // if dont have PROTO it would be error
	return `${this.name} :: ${this.id}`
}
let milos = new PersonP('Milos', 231)
// console.log(milos.getDetails())

let employeeP = function (nm,id,salary) {
	PersonP.call(this, nm, id);
	this.salary = salary;
}
Object.setPrototypeOf(employeeP, PersonP.prototype); // extends
employeeP.prototype.employeeInfo = function() {
	return `${this.name} = ${this.id} = ${this.salary}`;
}
let stefana = new employeeP("stefana", 342, 40000)
// console.log(stefana.employeeInfo())


let a = 0;
let b = false;
// console.log(a == b)

// BLOCK SCOPE - CONST LET
{let x = 45;} // CANNOT
{var y = 44;} // CAN
for(var i = 0; i < 5;i++){
 // IT POSSIBLE
}
for(let b = 0; i < 5;i++){
	// CAN NOT
}
// console.log(b)


// Higher order function
function higherOrder(fn) {
  fn();
}
     
higherOrder(function() {
 // console.log("Hello world") 
}); 


// Older Than Me
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (this.age < other.age){
			return `${other.name} is older than me.`
		}else if (this.age > other.age){
			return `${other.name} is younger than me.`
		}else{
			return `${other.name} is the same age as me.`
		}
	} 
}
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

