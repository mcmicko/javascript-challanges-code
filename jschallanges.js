// MATCH() SPLIT()
function isJS(path) {
	return path.split('.')[1].match('js') ? true : false
}
function isJS(path) {
	return path.includes('js') || path.includes('jsx');
}
// console.log(isJS("/users/user.jsx"))
// console.log(isJS("/users/user.js"))
// console.log(isJS("/users/user.jpg"))
// console.log(isJS("/users/user.ts"))

//RETURN ONLY NUMBER - FILTER()
function filterArray(arr) {
	return arr.filter(e => Number.isInteger(e))
}
// console.log(filterArray([1, 2, "a", "b"]))
// console.log(filterArray([1, "a", "b", 0, 15]))
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]))


//SORTING NUMBER WITHOUT NULL
function sortNumsAscending(arr) {
	if(arr === null) {
		return []
	} else {
		return arr.sort((a,b) => a - b)
	}
}
function sortNumsAscending(arr) {
  if (arr === null) return [];
  return arr.sort((a, b) => a - b);
}
// console.log(sortNumsAscending([1, 2, 10, 50, 5]))
// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]))
// console.log(sortNumsAscending(null))
// console.log(sortNumsAscending([]))
// console.log(sortNumsAscending([47, 51, -17, -16, 91, 47, -85, -8, -16, -27]))

//Find the Largest Numbers in a Group of Arrays FORLOOP() MAP()
function findLargestNums(arr) {
	let empty = []
	for(let i = 0; i < arr.length; i++){
		empty.push(Math.max(...arr[i]))
	}
	return empty
}
function findLargestNums(arr) {
  return arr.map(x => Math.max(...x));
}
// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
// console.log(findLargestNums([[0, 0, 0, 0], [3, 3, 3, 3], [-2, -2]]))
// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))


//Return the Index of the First VOWEL SEARCH() INDEXOF() MATCH() 
function firstVowel(str) {
	return str.indexOf(str.match(/[aeiou]/i))
}
function firstVowel(str) {
	return str.search(/a|e|i|o|u/i);
}
// console.log(firstVowel("hello"))
// console.log(firstVowel("string"))
// console.log(firstVowel("apple"))
// console.log(firstVowel("STRAWBERRY"))


//Is the Number Symmetrical? toString() split() reverse() parseInt()
function isSymmetrical(num) {
	let rev = num.toString().split('').reverse().join('')
	return num === parseInt(rev) ? true : false
}
function isSymmetrical(num) {
	return num.toString().split("").reverse().join("") === num.toString();
}
// console.log(isSymmetrical(7227))
// console.log(isSymmetrical(12567))
// console.log(isSymmetrical(44444444))
// console.log(isSymmetrical(9939))


//Phone Number Formatting | [] slice()
function formatPhoneNumber(numbers) {
	let one = numbers.slice(0,3).join('')
	let two = numbers.slice(3,6).join('')
	let three = numbers.slice(6).join('')
	return `(${one}) ${two}-${three}`
}
function formatPhoneNumber(numbers) {
  let arr = "(XXX) XXX-XXXX".split('');
  numbers.forEach(n => {
    arr[arr.indexOf('X')] = n;
  });
  return arr.join('');
}
// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]))
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]))


// Say "Hello" Say "Bye" | slice() toUpperCase()
function sayHelloBye(name, num) {
	if(num === 1) {
		let capital = name.slice(0,1).toUpperCase()
		return `Hello ${capital + name.slice(1)}`
	} else {
		let capital = name.slice(0,1).toUpperCase()
		return `Bye ${capital + name.slice(1)}`
	}
}
function sayHelloBye (name, num) {
	name = name[0].toUpperCase() + name.slice(1);

	return num === 1 ? `Hello ${name}` : `Bye ${name}`;
}
// console.log(sayHelloBye("jose", 1))
// console.log(sayHelloBye("barry", 1))
// console.log(sayHelloBye("jon", 0))


// Repeating Letters map() split() repeat()
function doubleChar(str) {
	return str.split('').map(e => e.repeat(2)).join('')
}
function doubleChar(str) {
  return str.split('').map(x => x + x).join('');
}
// console.log(doubleChar("String"))
// console.log(doubleChar("Hello World!"))
// console.log(doubleChar("1234!_ "))
// console.log(doubleChar("##^&%%*&%%$#@@!"))


// Absolute Sum
function getAbsSum(arr) {
	return arr.map(e => Math.abs(e)).reduce((a,b) => a + b)
}
function getAbsSum(arr){
  return arr.reduce((count, num) => count + Math.abs(num), 0)
}
// console.log(getAbsSum([2, -1, -3, 4, 8]))
// console.log(getAbsSum([-1]))
// console.log(getAbsSum([-1, -3, -5, -4, -10, 0]))


// How Many Vowels?
function countVowels(str) {
	return str.match(/[aeiou]/gi).length
}
function countVowels(str) {
  return str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length;
}
// console.log(countVowels("Celebration hello"))
// console.log(countVowels("Palm"))
// console.log(countVowels("Prediction"))



// Remove Every Vowel from a String
function removeVowels(str) {
	return str.split('').filter(e => !'aeiouAEIOU'.includes(e)).join('')
}
function removeVowels(str) {
  return str.replace(/[aeiou]/ig, '');
}
// console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))
// console.log(removeVowels("We're gonna build a wall!"))
// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"))



// Reverse Words Starting With a Particular Letter
function specialReverse(s, c) {
  return s.split(' ')
    .map(x => x.startsWith(c) ? x.split('').reverse().join('') : x)
    .join(' ')
}
// console.log(specialReverse("word searches are super fun", "s"))
// console.log(specialReverse("first man to walk on the moon", "m"))
// console.log(specialReverse("peter piper picked pickled peppers", "p"))



// First and Last Index
function charIndex(word, char) {
	return word.match(char) ? [word.indexOf(char), word.lastIndexOf(char)] : undefined;
}
// console.log(charIndex('hello', 'l'))
// console.log(charIndex('circumlocution', 'r'))
// console.log(charIndex('circumlocution', 'i'))



// Move Capital Letters to the Front
function capToFront(s) {
	let upper = s.split('').filter(e => e.includes(e.toUpperCase())).join('')
	let lower = s.split('').filter(e => e.includes(e.toLowerCase())).join('')
	return upper+lower
}
function capToFront(s) {
	return s.match(/[A-Z]/g).join("") + s.match(/[a-z]/g).join("")
}
// console.log(capToFront("hApPy"))
// console.log(capToFront("moveMENT"))
// console.log(capToFront("aPPlE"))
// console.log(capToFront("shOrtCAKE"))


// Most Left Digit
function leftDigit(num) {
	return parseInt(num.match(/[0-9]/).join('')[0])
}
// console.log(leftDigit("TrAdE2W1n95!"))
// console.log(leftDigit("V3r1ta$!"))
// console.log(leftDigit("U//DertHe1nflu3nC3!"))

// Converting Objects to Arrays MEDIUM
function toArray(obj) {
	return Object.keys(obj).map(x => [x, obj[x]]);
}
// console.log(toArray({ a: 1, b: 2 }))
// console.log(toArray({ foo: 33, bar: 45, baz: 67 }))
// console.log(toArray({ shrimp: 15, tots: 12 }))

// Number to Reversed Array MEDIUM
function reverseArr(num) {
	return num.toString().split('').reverse().map(e => parseInt(e))
}
// console.log(reverseArr(1485979))
// console.log(reverseArr(623478))
// console.log(reverseArr(12345))



// ReverseAndNot
function reverseAndNot(i) {
	let rev = i.toString().split('').reverse().map(e => parseInt(e)).join('')
	return parseInt(rev+i)
}
// console.log(reverseAndNot(123))
// console.log(reverseAndNot(123456789))

// Reverse the Number MEDIUM
function revNum(n) {
	return Math.abs(parseInt(n.toString().split('').reverse().join(''))).toString()
}
// console.log(revNum(215))
// console.log(revNum(122225))
// console.log(revNum(-215))



// Removing Enemies MEDIUM
function removeEnemies(names, enemies) {
	return names.filter(e => !e.includes(enemies[0]) && !e.includes(enemies[1]))
}
function removeEnemies(names, enemies) {
	return names.filter(x => !enemies.includes(x))
}
// console.log(removeEnemies(["Steve", "Eleanor"], []))
// console.log(removeEnemies(["Jeff", "Charlie", "James", "Fredrick"], ["James", "Jeff"]))
// console.log(removeEnemies(["Amelia", "Max", "Isobel", "Alex", "Phil"], ["Phil", "Max"]))
// console.log(removeEnemies(["John", "Skye", "Alexander", "Skye", "Tony"], ["Skye", "John"]))


// Even or Odd Number of Factors
function factorGroup(num) {
	var r = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) r.push(i);
	}
	return r.length % 2 == 1 ? 'odd' : 'even';
}
function factorGroup(num) {
	return num % 2 == 0 ? 'even' : 'odd';
}
// console.log(factorGroup(33))
// console.log(factorGroup(40))
// console.log(factorGroup(11))
// console.log(factorGroup(1))
// console.log(factorGroup(18))



// Return the Sum of the Two Smallest Numbers
function sumTwoSmallestNums(arr) {
	let sortArr = arr.filter(e => arr.includes(Math.abs(e))).sort((a,b) => a - b)
	return Math.abs(sortArr[0]) + Math.abs(sortArr[1])
}
function sumTwoSmallestNums(arr) {
	arr = arr.sort((a,b) => a - b).filter(x => x > 0);
	return arr[0] + arr[1];
 
 }
function sumTwoSmallestNums(arr) {
	return arr.filter(a => a > 0).sort((a,b) => a>b).slice(0,2).reduce((a,b) => a+b);
}
// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
// console.log(sumTwoSmallestNums([321, 406, -176]))
// console.log(sumTwoSmallestNums([2, 9, 6, -1, -1]))
// console.log(sumTwoSmallestNums([879, 953, 694, -847, -342]))
// console.log(sumTwoSmallestNums([-1, -1, 1, 1]))



// Broken Bridge
function isSafeBridge(str) {
	return str.split('').filter(e => e.includes(' ')).join('') === ' ' ? false : true;
}
function isSafeBridge(str) {
	let regex = /\s/g;
	let res = str.match(regex);
	return result = res===null? true:false
}
function isSafeBridge(s){
	return !s.includes(' ')
}
// console.log(isSafeBridge("####"))
// console.log(isSafeBridge("## ####"))
// console.log(isSafeBridge("#"))



// Blah, Blah, Blah...
function blahBlah(str, n) {
	if(str.split(' ').length < n) {
		return str.split(' ').map(e => 'blah'.replace(e)).join(' ') + '...'
	} else {
		let blah = str.split(' ').slice(0, n).map(e => e.replace(e, 'blah')).join(' ')
		let firstWord = str.split(' ').slice(0, str.split(' ').length - n).join(' ')
		return firstWord + ' ' + blah + '...'
	}
}
// const blahBlah = (str, n) =>
// 	str.split(' ')
// 		 .map((el, i, a) => a.length - i <= n ? 'blah' : el)
// 		 .join(' ') + '...';
// console.log(blahBlah("A function is a block of code which only runs when it is called",  5))
// console.log(blahBlah("one two three four five", 2))
// console.log(blahBlah("Sphinx of black quartz judge my vow", 10))
// console.log(blahBlah("The quadratic formula is negative b plus or minus the square root of b squared subtract four ac all over two a", 5))


// Capitalize the Last Letter
function capLast(txt) {
	return txt.split(' ')
		.map(e => e.slice(0 , e.length - 1) + e[e.length -1].toUpperCase())
		.join(' ');
}
function capLast(txt) {
	const cap = s => s.slice(0,-1) + s.slice(-1).toUpperCase();
	return txt.split(' ').map(cap).join(' ');
}
// console.log(capLast("hello"))
// console.log(capLast("My Name Is Edabit"))
// console.log(capLast("HELp THe LASt LETTERs CAPITALISe"))



// Recursion: Count Vowels
function countVowels(str) {
	return str.split('').filter(e => e.match(/[aeiou]/g)).join('').length
}
function countVowels(str) {
	let vowels = 'aeiou';
	let count = 0;
	for(let i = 0; i< str.length; i++){
		if(vowels.indexOf(str[i]) !== -1){
			count += 1;
		}
	}
	return count;
}
// console.log(countVowels("apple"))
// console.log(countVowels("cheesecake"))
// console.log(countVowels("rhythm"))
// console.log(countVowels(""))


// Adding Numbers in a String
function addNums(nums) {
	let intArr = nums.split(' ').map(e => parseInt(e))
	return intArr;
}
function addNums(nums) {
	return nums.split(", ").map(x => parseInt(x)).reduce((a,b) => a + b)
}
// console.log(addNums("2, 5, 1, 8, 4"))
// console.log(addNums("1, 2, 3, 4, 5, 6, 7"))
// console.log(addNums("-12, -8, 2, 11, -16, 16"))


// One Odd and One Even
function oneOddOneEven(n) {
	let str = n.toString().split('')
	return parseInt(str[0]) % 2 === parseInt(str[1]) % 2 ? false : true;
}
// console.log(oneOddOneEven(12))
// console.log(oneOddOneEven(13))
// console.log(oneOddOneEven(14))
// console.log(oneOddOneEven(20))
// console.log(oneOddOneEven(11))



// Find the Bomb
function bomb(str) {
	return  str.split(' ').filter(e => e.match(/bomb/i)).join(' ')
		.toLowerCase() ? 'Duck!!!' : 'There is no bomb, relax.';
}
 function bomb(str) {
	return /bomb/ig.test(str)?"Duck!!!":"There is no bomb, relax."
}
// console.log(bomb("Hey, did you find the BoMb?"))
// console.log(bomb("Hey, did you find the?"))
// console.log(bomb("Hey, did you find the bombb"))


// Convert Hours and Minutes into Seconds
function convert(hours, minutes) {
	let h = hours * 3600;
	let m = minutes * 60;
	return h + m
}
function convert(hours, minutes) {
	return ((hours*60) + minutes) * 60
}
// console.log(convert(1, 0))
// console.log(convert(1, 3))
// console.log(convert(1, 30))


function fizzBuzz() {
	for(let i = 1; i <= 100; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
	  } else if(i % 3 === 0) {
			console.log('Fizz')
		} else if(i % 5 === 0) {
			console.log('Buzz')
		} else {
			console.log(i)
		}
	}
}
// console.log(fizzBuzz())

// return character that is most common in string
function maxCharacters(str) {
	let charMap = {};
	let maxNum = 0;
	let maxChar = '';
	
	str.split('').forEach(char => {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});

	for(let char in charMap) {
		if(charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}
	return maxChar
}
// console.log(maxCharacters('i love javaaascript'))
// console.log(maxCharacters('my name is milos'))

// determination on which position is character
function searchMethod(str) {
	return str.search('a')
}
// console.log(searchMethod('12345a'))
// console.log(searchMethod('12a45a'))


function chunkArray(arr, len) {
	const chunkedArr = []
	let i = 0;

	while(i < arr.length) {
		chunkedArr.push(arr.slice(i, i + len));
		i += len;
	}
	return chunkedArr;
}
// console.log(chunkArray([1,2,3,4,5,6,7], 3))


// Total Volume
function totalVolume(...boxes) {
	let count = [];
	for(let i = 0; i < boxes.length; i++) {
		let multiple = boxes[i].reduce((a,b) => a * b)
		count.push(multiple);
	}
	return count.reduce((a,b) => a + b);
}
function totalVolume(...boxes) {
	return boxes.map(x => x.reduce((a,b) => a*b)).reduce((a,b) => a+b);
}
// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
// console.log(totalVolume([2, 2, 2], [2, 1, 1]))
// console.log(totalVolume([1, 1, 1]))


// Return the Objects Keys and Values
function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map( key => obj[key] )];
}
// console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))

// dont repeat characters
function dontRepeat(arr) {
	return arr.filter((item, index) => arr.indexOf(item) === index);
}
// console.log(dontRepeat([1,1,5,5,2,2]))


// Concatenate to Form Target Array
function canConcatenate(arr, target) {
	const emptyArr = []
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr[i].length; j++) {
			emptyArr.push(arr[i][j])
		}
	}
	return emptyArr
}
// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]))
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]))


// What's Hiding Amongst the Crowd?
function detectWord(str) {
	return str.match(/[a-z]/g).join('')
}
// console.log(detectWord("UcUNFYGaFYFYGtNUH"))
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"))
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))


function censor(str) {
	let star = "*"
	return str.split(" ").map(e => e.length > 4 ? "*".repeat(e.length).replace(e) : e).join(" ")
}
function censor(str) {
	var arr = str.split(' ');
	var replace = "*"
	for (var i = 0; i<arr.length; i++) {
		if (arr[i].length > 4) {
			arr[i] = replace.repeat(arr[i].length)
		}
 	}
	return arr.join(' ');
}
// console.log(censor("The code is fourty"))
// console.log(censor("Two plus three is five"))
// console.log(censor("aaaa aaaaa 1234 12345"))


// Count the Number of Duplicate Characters *********************
function duplicates(str) {
	let letters = str.split("")
	let unique = new Set(letters)
	return letters.length - unique.size
}
// console.log(duplicates("Hello World!"))
// console.log(duplicates("birthday"))
// console.log(duplicates("helicopter"))
// console.log(duplicates("gamer gang"))


// Numbers to Arrays and Vice Versa
function toArray(num) {
	return num === 0 ? [0] : num.toString().split("").map(e => parseInt(e))
}

function toNumber(arr) {
	return parseInt(arr.join(""))
}
// console.log(toArray(235))
// console.log(toArray(0))
// console.log(toNumber([2,3,5]))
// console.log(toNumber([0]))


// Number of Arrays in an Array
function numOfSubbarrays(arr) {
	return arr.filter(e => e.length).length
}
function numOfSubbarrays(arr) {
	return arr.filter(a => Array.isArray(a)).length;
}
function numOfSubbarrays(arr) {
	return arr.filter(a => a instanceof Array).length;
}
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))
// console.log(numOfSubbarrays([[1, 2, 3]]))
// console.log(numOfSubbarrays([1, 2, 3]))
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]))


// Words that Start with a Vowel
function retrieve(str) {
	return str.toLowerCase().split('').map(e =>  e.replace('.', '')).join('')
		.split(' ').filter(e => typeof e[0] !== 'undefined' ? e[0].match(/[aeiou]/gi) : null)
}
function retrieve(str) {
	return str?str.match(/\b[aeiou]\w*/ig).map(e=>e.toLowerCase()) :[]
}
// console.log(retrieve("A simple life is a happy life for me."))
// console.log(retrieve("Exercising is a healthy way to burn off energy."))
// console.log(retrieve("The poor ostrich was ostracized."))
// console.log(retrieve(""))

// Upper or Lower Case *******************************************
function stepsToConvert(str) {
	const lower = str.replace(/[^a-z]/g, "").length;
	const upper = str.replace(/[^A-Z]/g, "").length;
	return Math.min(lower, upper);
}
// console.log(stepsToConvert('abC'))
// console.log(stepsToConvert('abCBA'))
// console.log(stepsToConvert('CCaaCCaaCa'))
// console.log(stepsToConvert(''))


// Return the Highest and Lowest Numbers
function highLow(str) {
	let int =  str.split(' ').map(e => parseInt(e))
	return `${Math.max(...int).toString()} ${Math.min(...int).toString()}`;
}
// console.log(highLow('1 2 3 4 5'))
// console.log(highLow('1 2 -3 4 5'))
// console.log(highLow('1 9 3 4 -5'))
// console.log(highLow('13'))


// Check if the String is a Palindrome
function isPalindrome(str) {
	return str.split('').reverse().join('').toLowerCase().replace(/[^a-z]/g, "") 
		=== str.toLowerCase().replace(/[^a-z]/g, "");
}
// function isPalindrome(string) {
//   var sanitized = string.toLowerCase().replace(/[^a-z]/g, "");
//   var reversed = sanitized.split('').reverse().join(''); 
//   return (reversed == sanitized);
// }
// console.log(isPalindrome('Neuquen'))
// console.log(isPalindrome('Not a palindrome'))
// console.log(isPalindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'))


// Reverse the Case
function reverseCase(str) {
	return str.split('').map(e => e.match(/[A-Z]/) ? e.toLowerCase() : e.toUpperCase()).join('')
}
// console.log(reverseCase('Happy Birthday'))
// console.log(reverseCase('MANY THANKS'))
// console.log(reverseCase('sPoNtAnEoUs'))
// console.log(reverseCase('eXCELLENT, yOuR mAJESTY'))


// Number Split
function numberSplit(n) {
	let a = n / 2
	return [Math.floor(a), Math.ceil(a)]
}
// console.log(numberSplit(4))
// console.log(numberSplit(10))
// console.log(numberSplit(11))
// console.log(numberSplit(0))
// console.log(numberSplit(-5))
// console.log(numberSplit(-4))

// Add up the Numbers from a Single Number
function addUp(num) {
	let count = 0;
	for(let i =1; i <= num;i++) {
		count += i
	}
	return count;
}
// console.log(addUp(4))
// console.log(addUp(13))
// console.log(addUp(600))
// console.log(addUp(23))

function objectChangeValue(obj) {
	// return Object.keys(obj).map(key => obj[key] === '' || obj[key] === ' ' ? null : obj[key])
	let entr = Object.entries(obj)
	let o = entr.map(e => e[1] === '' || e[1] === ' ' ? [e[0], null] : e)
	return Object.fromEntries(o)
}
// console.log(objectChangeValue({a: '1', b: '2', c: ''}))
// console.log(objectChangeValue({a: '', b: '2', c: ' ', d: '5'}))
// console.log(objectChangeValue({a: '2', b: '1 ', c: ' ', d: '' }))



function sym(args1, args2) {
  let conArr = args2.concat(args1).slice().sort()
  let results = []
  for(let i = 0; i < conArr.length;i++) {
  	if(conArr[i + 1] == conArr[i]) {
  		results.push(conArr[i])
  	}
  }
  return results;
}

// console.log(sym([1, 2, 3], [5, 2, 1,1, 4]));



const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}


uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
var count = {};
uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log(count);


// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }


//LARGEST SWAP
function largestSwap(num) {
	let firstDigit = num.toString().split('')[0]
	let secondDigit = num.toString().split('')[1]
	
	if(firstDigit < secondDigit) {
		return 'so largest swap'
	} else if(firstDigit > secondDigit) {
		return 'so NOT largest swap'
	} else {
		return 'Cannot do better, so largest swap.'
	}
}
// console.log(largestSwap(27))
// console.log(largestSwap(43))
// console.log(largestSwap(14))
// console.log(largestSwap(53))
// console.log(largestSwap(55))



























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