// const name = "Shriyanshu"
// const repoCount = "50"

// console.log(name + repoCount+ "value");
 
// // only the good way of concatinate multiple strings together
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


// another way to define a string 
const gameName = new String ('Shriyanshu')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
console.log(gameName.charAt(0));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4);
console.log(newString);

console.log("_______________________");
const anotherString = gameName.slice(-1);
console.log(anotherString)