// 1. Write a function with required and optional parameters
// 2. Define return types explicitly
// 3. Create a small utility function that would exist in a real project
// 4. Write a function with one required and one optional parameter
// 5. Call it with and without the optional argument
// 6. How does TypeScript enforce correctness here?


// 1. Write a function with required and optional parameters


// function sumTwoNumber(a : number , b:number){
//     return a+b;
// }

// function sum(a:number , b?:number){
//     return b? a+b : a;
// }

// console.log(sumTwoNumber(10,"20"));
// console.log(sum(10,20));


// 2. Define return types explicitly
// function sumTwoNumber(a : number , b:number):number{
//     return a+b;
// }

// function sum(a:number , b?:number):number{
//     return b? a+b : a;
// }

// console.log(sumTwoNumber(10,20));
// console.log(sum(10,20));

// 3. Create a small utility function that would exist in a real project

function printName(MaxPrice : number[]):number{
    return Math.max(...MaxPrice);
}

console.log(printName([10,20,30,40,50,60,80,400]));

// 6. How does TypeScript enforce correctness here?
// so suppose we add any number in the array of number then it generates the error that string is not allowed in the array of number