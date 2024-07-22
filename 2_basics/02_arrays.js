const marvel_heros = ["thor" , "Ironman","spiderman"]
const dc_heros = ["superman","flash","Batman"]

// marvel_heros.push(dc_heros); // this is bad way to combine the array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  // this is how we call the variable from the above array , which is little complicated

// const allHeros = marvel_heros.concat(dc_heros); // This is one of the way to combine the arrays
// console.log(allHeros);

// //now there is another way to combine the two array

// const all_new_heros = [...marvel_heros, ...dc_heros] // this is the most used type to combine the array

// console.log(all_new_heros)

const another_array = [1,2,3[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




