// array 

const myArr = [0,1,2,3,"shriyanshu",true]

// console.log(myArr[5]);

const myHeors = ["Batman","Hulk","Xman","Antman","Spiderman","Ironman"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr["1"]);
//Deep copy and shallow copy 

// myArr.push(6)
// myArr.push(7) 
// myArr.pop() // remove the last value from the array
// myArr.unshift(9) // put the value at the starting of the array
// myArr.shift() // remove the value from the starting of the array
// console.log(myArr);

// console.log(myArr.includes(9)); // it check that the value 9 is present in the array or not give answer in the boolen value
// console.log(myArr.indexOf(3)); // it shows that the value is present or not if not then it shows -1 always or if it is present then it gives its index no.

// important 

// const newArr = myArr.join() // it binds the array and also change its data type to string 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// slice , splice (the main diff b/w them is slice don't change the orginal value of the array whereas splice do)

console.log("A", myArr);

const myn1 = myArr.slice(1,3); // it prints the value which are b/w the given index in slice brackets 1,3
console.log(myn1); // it print the slice value

console.log("B",myArr); // it shows that there is no change in the Array

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr); // so as you can see that it return the array but change the value of it by removing the values which we have given in the splice index



