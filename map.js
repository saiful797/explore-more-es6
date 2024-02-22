//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumber = [];

// for(const num of numbers){
//     const double = num * 2;
//     doubledNumber.push(double);
// }

// console.log(doubledNumber);


// Map==> loops through each elements of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.
const numbers = [6, 7, 8, 9, 10];

//Normal Function
function doubleIt(num){
    //console.log('Number Noe: ', num);
    return num * 2;
}

//Arrow function
const double2 = n => n * 2;

const result = numbers.map(doubleIt);//call 'doubleIt' function\
console.log(result);

const output = numbers.map(double2);//call 'double2' function
console.log(output);

const output2 = numbers.map(n => n * 2);
console.log(output2);