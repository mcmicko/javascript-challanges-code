// Check whether a string contains another string and concatenate
function conString (a, b) {
	if(a.split("")[0].match(/[A-Z]/g) || a === 'cheese') {
		return a.concat(b)
	}  else {
		return b.concat(a)
	}
}
function conString(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a
}
// console.log(conString('cheese', 'cake'))
// console.log(conString('lips', 's'))
// console.log(conString('Java', 'script'))
// console.log(conString(' think, therefore I am', 'I'))


// Accessing object properties one
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function accObj (obj) {
	return obj.country
}
// console.log(accObj({continent: "Asia", country: "Japan"}))
// console.log(accObj({country: "Sweeden", continent: "Europa"}))

// Return last n array elements
// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all
function lastEl(arr, el) {
	return arr.length < el ? arr : arr.slice(-el)
}
function lastEl(arr, n) {
  return arr.slice(-n);
}
// console.log(lastEl([1, 2, 3, 4, 5], 2))
// console.log(lastEl([1, 2, 3], 6))
// console.log(lastEl([1, 2, 3, 4, 5, 6, 7, 8], 3))

// * Adding Numbers in a String
//Given a string of numbers separated by a comma and space, return the total sum of all the numbers.
const addNums = (str) => {
	return str.split(",").map(e => parseInt(e)).reduce((a, b) => a + b)
}
// console.log(addNums("2, 5, 1, 8, 4"))
// console.log(addNums("1, 2, 3, 4, 5, 6, 7"))
// console.log(addNums("10"))
// console.log(addNums("-12, -8, 2, 11, -16, 16"))

// * Reverse Words Starting With a Particular Letter
function specialReverse(s, c) {
	return s.split(" ").map(e => e[0] === c ? e.split("").reverse().join("") : e).join(" ")
}
// console.log(specialReverse("word searches are super fun", "s"))
// console.log(specialReverse("first man to walk on the moon","m"))
// console.log(specialReverse("peter piper picked pickled peppers", "p"))
// console.log(specialReverse("he went to climb mount everest", "p"))

function extendVowels(word, num) {
	if(Math.sign(num) === -1 || Number(num) === num && num % 1 !== 0) {
		return "invalid"
	} else {
		return word.split("")
		.map(e => e.match(/[aeiou]/gi) === null ? e : e.repeat(num)).join("")
	}
}	
// console.log(extendVowels("Hello", 5))
// console.log(extendVowels("edabit", 3))
// console.log(extendVowels("A", 10))
// console.log(extendVowels("Nice", -8))
// console.log(extendVowels("Vowel", 0.5))