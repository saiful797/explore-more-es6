/**
 * 1. var let const ('let' and 'const' variables are block scope variable, but 'var' is not a block scope variable type)
 * 
 * 2. default parameter
 * 
 * 3. template string
 * 
 * 4. arrow function
 * 
 * 5. destructuring and Spread Operator
 * 
 * 6. Objects.keys, Objects.values, Objects.entries
 * 
 * 7. for...of loop used in Array and String,
 * 
 * 8. for...in loop used in Object
 */

//template string example

const a = 56;
const numbers = [2,13,4];
const person = {
    name:'Sakib Khan',
};
            //template string
const message = `Hi!, ${person.name} has a: ${a} access to ${numbers[1]}`

//console.log(message);


//Arrow function
const square = x => x * x;
//console.log(square(12));

 const add = (a, b) => a + b;
 //console.log(add(7, 6));



//  destructuring

//destructuring object
const {age, z, ...others } = {x:4, y:5, z:3, name:'object', age: 55};

// console.log(age);
// console.log(z);
// console.log(others);

//destructuring array
const [first, second, ...remaining] = ['ram', 'sam', 'jodu', 'kodu', 'modhu'];

console.log(first);
console.log(second);
console.log(remaining);