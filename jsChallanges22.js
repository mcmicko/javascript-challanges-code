 // *  20. Napisati funkciju koja ce za prosledjeni objekat (ucenika) sracunati prosek njegovih zakljucenih ocena na kraju godine.
 // *      Npr ako su predmeti sledeci: tehnicko: [3,4,5,5,4]
 // *                                   matematika: [5,2,3,5,4]
 // *                                   srpski jezik: [4,4,3,5,4]
 // *      Onda na osnovu ova 3 predmeta izvuci UKUPNU prosecnu ocenu i tu ocenu dodeliti tom uceniku kao prosek za kraj godine:
 // *      Npr: 'Pera Peric has an average grade: $PROSEK'
 // *      ! HINT: proveriti da li se moze FOR IN loop iskoristiti

// MOJ NACIN //
const pera = {
    name: "Pera Peric",
    grades: {
        tehnicko: [4,3,2,4,5],
        matematika: [4,4,2,5,4],
        srpski: [5,5,4,3,2]
    }
 }

const findAvarageFunc1 = (student) => {
    const allGrades = student.grades.srpski.concat(student.grades.tehnicko.concat(student.grades.matematika))
    return allGrades.reduce((a,b) => a + b) / allGrades.length 
}


const findAnAverageFunc2 = (student) => {
    const allGrades = [];
    let average = 0;
    for(let key in student.grades) {
        for(let grade of student.grades[key]) {
            allGrades.push(grade);
        }
    }
    average = allGrades.reduce((prevVal, currVal) => prevVal + currVal, 0) / allGrades.length;
    return average;
}

// console.log(findAnAverageFunc2(pera))


 // *  19. Napisati funkciju koja vraca broj kopija u nizu. 
 // *      Ako ima duplikata ispisati: There are $BROJ_DUPLIKATA duplicates in this array
 // *      Ako nema duplikata ispisati: There are no duplicates in this array
function returnCopy (arr) {
    return arr.filter((num, index) => arr.indexOf(num) === index).length !== arr.length
}

const getArrayDuplicatesNumber = (array) => {
    let counterOfDuplicates = 0;
    array.filter((element,idx,array) => {
        if(array.indexOf(element) !== idx) {
            counterOfDuplicates++;
        }
    });
    return counterOfDuplicates > 0 ? `There are ${counterOfDuplicates} duplicates in this array` : `There are no duplicates in this array`;
}

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
// console.log(getArrayDuplicatesNumber([1,2,3,1,2,4,5,6,3])); // There are 3 duplicates in this array
// console.log(getArrayDuplicatesNumber([1,2,3,4,5])); // There are no duplicates in this array
// console.log(returnCopy([1,2,3,4,5,6]))
// console.log(returnCopy([1,2,3,4,6,6]))


  // * 14. Napisati funkciju koja ce ovaj niz sa knjigama sortirati rastuce po naslovu:
const books = [
           {
               id: 1,
               author: 'Steven King',
               title: 'Misery'
           },
           {
               id: 2,
               author: 'Steven King',
               title: 'The Shining'
           },
           {
               id: 3,
               author: 'aSteven King',
               title: 'aDoctor Sleep'
           }
      ]

const sortByTitle = arr => {
    return arr.map(b => b.title).sort((a, b) => b - a)
}

// console.log(books.sort((a,b) => {
//     return a.title > b.title ? 1 : -1;
// }));

// console.log(sortByTitle(books))


// OBJECTS
const studentExample = {
    name: 'Marko Markovic',
    age: 23,
    courses: ['Java', 'JavaScript', 'C#'],
    gender: 'male',
    isStudent: true,
    address: {
        street: 'Fruskogorska 33',
        zipCode: 21000,
        city: 'Novi Sad',
        apartment: {
            number: 145,
            floor: 10
        }
    }
}
// console.log(studentExample.address.city)


let exampleObject2 = {
    id: 4,
    name: 'Sara Saric',
    isStudent: true,
    courses: ['Java', 'JavaScript', 'C#']
}

let exampleString2 = JSON.stringify(exampleObject2);

// console.log(exampleString2);
// console.log(exampleObject2);

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function takeString(a,n) {
  return a.split("")[n -1]
}

// console.log(takeString("abcd",1))
// console.log(takeString('gfedcba',3))
// console.log(takeString('zyxbwpl',5))

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
function extractChar(str) {
  // return str.split("").splice(str.length -3).join("")
  // return str.slice(str.length -3)
  return str.slice(-3);
} 
// console.log(extractChar("abcdefg"))
// console.log(extractChar("1234"))
// console.log(extractChar("fgedcba"))


// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function objKeyValue(obj,key) {
  // const keyObj = Object.keys(obj).filter(e => e.includes(key)).join("")
  // return obj[keyObj]

  return obj[key]
}
// console.log(objKeyValue({  continent: 'Asia',  country: 'Japan'}, 'continent'))
// console.log(objKeyValue({  country: 'Sweden',  continent: 'Europe'}, 'country'))


// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function retTrue(a,b) {
  // return Object.keys(a).filter(e => e.includes(b)).join("") !== "" ? true : false
  return b in a;
}
// console.log(retTrue({a:1,b:2,c:3},'b'))
// console.log(retTrue({x:'a',y:'b',z:'c'},'a'))
// console.log(retTrue({x:'a',y:'b',z:'c'},'z'))

function createKeyObj(a) {
  // const obj = new Object()
  // obj.key = a
  // return obj

  return { key: a };
}
// console.log(createKeyObj("a"))
// console.log(createKeyObj("b"))
// console.log(createKeyObj("c"))

function sumObjVal(a) {
  return Object.values(a).reduce((a,b) => a + b)
}
// console.log(sumObjVal({a:1,b:2,c:3}))
// console.log(sumObjVal({j:9,i:2,x:3,z:4}))
// console.log(sumObjVal({w:15,x:22,y:13}))

function descArr(arr) {
  return arr.sort((a,b) => b-a)
}
// console.log(descArr([1,2,3]))
// console.log(descArr([3,2,4,5,6,7,1]))


// Tuck in Array
// Create a function that takes two arrays and insert the 
// second array in the middle of the first array.
// The first array always has two elements.
// Use the spread syntax to solve this challenge.
function tuckIn(arr1, arr2) {
  // return `${arr1[0]} ${arr2} ${arr1[1]}`
   arr2.unshift(arr1[0])
   arr2.push(arr1[1])
return arr2
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15, 150], [45, 75, 35])) // [15, 45, 75, 35, 150]
console.log(tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]))
// ["bottom", "tomatosauce", "vegetables", "cheese", "topping"]
console.log(tuckIn([true, false], [false, true, null, undefined]))
// [true, false, true, null, undefined, false]
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])) // [[1, 2], [3, 4], [5, 6]]