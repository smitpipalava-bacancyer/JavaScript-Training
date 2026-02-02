// Q16. Async Function Order 
 
// async function foo() { 
//     console.log("A"); 
//     await Promise.resolve(); 
//     console.log("B"); 
// } 
 
// console.log("C"); 
// foo(); 
// console.log("D"); 

// Output :- C A D B
// Explanation :- once again it is about the event loop so first console.log() executes then foo() runs and it logs A and then await stops the execution of the function and goes in the macrotask queue and then D printed and promise comes in the callstack and print B.

//---------------------------------------------------------------------------------------------------------------------------------------------

 
// Q17. The "Finally" Gotcha 
 
// Promise.resolve("Done") 
//     .finally(() => { 
//         console.log("Cleanup"); 
//         return "Modified?"; 
//     }) 
//     .then(res => console.log(res));

// Output :- 
// Explanation :-

//---------------------------------------------------------------------------------------------------------------------------------------------
 
// Q18. Variable Hoisting & Promises 
 
// console.log(a); 
// var a = 5; 
 
// Promise.resolve().then(() => { 
//     console.log(a); 
// }); 
 
// a = 10; 
// Output :- undefined 10 
// Explanation :- first variable a is declaed but not defined internally js look like that var a ; console.log(a) ; a = 5; so it print undefined. then Promise.resolve().then() goes into the macroTask queue so js moves to the next line and store 10 in the variable a . now promise.resolve.then executed and it prints the value of a which is 10.
//---------------------------------------------------------------------------------------------------------------------------------------------
 
// Q19. Microtask vs Macrotask Interleaving 
 
// setTimeout(() => console.log("T1"), 0); 
 
// Promise.resolve().then(() => { 
//     console.log("P1"); 
//     setTimeout(() => console.log("T2"), 0); 
// }); 
 
// Promise.resolve().then(() => console.log("P2")); 
 
// console.log("End"); 
// Output :- End p1 p2 t1 t2
// Explanation :- it is once again about EventLoop question so first console.log() prints then Promise.resolve() executes so in first part console.log() executes and there is setTimeout() so it goes in the macroTaskqueue .. now there is another promise so it executes and prints P2 and then it goes to the first setTimeOut() and prins T1 and another setTimeOut() executed and it prints T2.

//---------------------------------------------------------------------------------------------------------------------------------------------
 
// Q20. Object Method Assigned to Class 
 
// class Manager { 
//     constructor(name) { 
//         this.name = name; 
//     } 
 
//     print = () => { 
//         console.log(this.name); 
//     } 
// } 
 
// const m = new Manager("Sarah"); 
// const p = m.print; 
// p(); 

// Output :- Sarah
// Explanation :- in class if the arrow function can't find the variable then it try to find the variable in it's lexical scope and here they find the variable and it print the value... 