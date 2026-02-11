// Assignment 1: Type Inference

// 1. Declare variables using let and const with initial values and observe inferred types
// 2. Try reassigning incompatible values and note the compiler errors
// 3. Write a function without a return type and inspect what TypeScript infers



// 1. Declare variables using let and const with initial values and observe inferred types
// let a = 10;
// const b = 10;

// console.log(typeof a);       // it shows me the number so it check the value and set the type of it automatically
// console.log(typeof b);



// 2. Try reassigning incompatible values and note the compiler errors
// a = "SMIT";
// b = "JENISH";

// when i try to change the value of let variable then it shows me that Type string is not assignable to type number...
// when i try to change the value of const variable then it shows me that  Cannot assign to 'b' because it is a constant. ...



// 3. Write a function without a return type and inspect what TypeScript infers
function addNumber(a :number , b:number){
    return a+b;
}


console.log(addNumber(10,20));
// console.log(addNumber("10",20));         // if i pass first parameter as a string then it return the string because we didn't set the type of the arguments..