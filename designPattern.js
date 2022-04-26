
// PATTERN

// // Singleton pattern
const Singleton = (function() {
	let pManager

	function ProcessManager() {
		this.numProcess = 0
	}
	
	function createProcessManager() {
		pManager = new ProcessManager
		return pManager
	}

	return {
		getProcessManager:() => {
			if(!pManager) 
				pManager = createProcessManager()
			return pManager;
		}
	}
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

// console.log(processManager === processManager2)


// FACTORY pattern
function Developer(name) {
	this.name = name
	this.type = "Developer"
}

function Tester(name) {
	this.name = name;
	this.type = "Tester";
}

function EmployeeFactory() {
	this.create = (name, type) => {
		switch(type) {
			case 1:
				return new Developer(name)
				break;
			case 2:
				return new Tester(name)
				break;
		}
	}
}

function say() {
	// console.log(`Hi my name ${this.name} and i am ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("Milos",2))

employees.forEach(e => {
	say.call(e)
})