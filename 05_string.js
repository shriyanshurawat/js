// const name = "Shriyanshu"
// const repoCount = "50"

// console.log(name + repoCount+ "value");
 
// // only the good way of concatinate multiple strings together
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // it is know as string in terpolation concept


// another way to define a string 
// const gameName = new String ('Shriyanshu')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('y'));

// const newString = gameName.substring(0,4);
// console.log(newString);


// const anotherString = gameName.slice(-1);
// console.log(anotherString)

const newStringone = "       shriynashu   "
console.log(newStringone);

console.log(newStringone.trim()); /// simply remove the empty space and perfrom on whitespace and line 
// the trim function can be use to remove the empty spaces which is uses by user put emptyspace at the end or starting of the input field like email.


const url = "https://Shriyanshu.com/shriyanshu%20rawat"
console.log(url.replace('%20','___')) // it will replace the %20 from ___

console.log(url.includes('rawat'));