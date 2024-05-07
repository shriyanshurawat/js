// primtive data types
// 7 types :String , number , boolean , null , undefined, Symbol, BigInt 

// const score = 100
// const scoreValue = 100.3


// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id ===anotherId);

const BigNumber = 2134123412451235123n //automatically  use bigInt if dont use n at the last of the number




// // Reference (Non primitive)

// // Arrays , objects , Functions 

// const heros = ["shaktiman" , "naagraja" , "jaadu"]

// let myObj = {
//     name: "Shriyanshu",
//     age: 21
// }

// const myFunction  = function(){
//     console.log("Hello world");
// }

// console.log(typeof BigNumber);

/*****************************************************************************************/

//Stack memory use in (primitve) - it means give a copy of what we change
// numbers and boolean 
 
let myname = "Shriyanshhu"
let anothername = "Shriyanshu"
anothername = "Rawat"

console.log(myname)
console.log(anothername)

let userone ={
    email: "user@google.com" , 
    upi: "user@upl"
}

let usertwo = userone;
usertwo.email = "shriyanshu@gmal.com"

console.log(usertwo.email);
console.log(userone.email);



//heap (non -  primitive) - it means when we change this datatype it entierly change the value 

// let myschoolName = 