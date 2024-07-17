const score = 400 
const balance = new Number(100); // we defined it that is a number so it should be number and we have now few function for it to apply on it as compare to stiring

console.log(balance);

// so now here the value is the same but we defined its data type to be in string by which we are now able to apply many inbuild function in it
console.log(balance.toString().length);
console.log(balance.toString());
console.log(balance.toFixed(2)); // output 400.00
console.log(typeof(balance));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));//take overall values 

const hundreds = 100000
console.log(hundreds.toLocaleString('en-In'));
// Number.MAX_VALUE and Number.MIN_VALUE

//+++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,5,6,7,8));
// console.log(Math.max(4,5,6,7,8));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min =10;
const max = 20;
Math.random()
