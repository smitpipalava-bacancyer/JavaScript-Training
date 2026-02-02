// Q6. The "Lost" Context 
 
// const user = { 
//     name: "Alex", 
//     printName() { 
//         console.log(this.name); 
//     } 
// }; 
 
// const print = user.printName; 
// print(); 

// Output :- undefined
// Explanation :- because printName is a user's method and when we assign this method to another variable then it lost it's owner so when we try to print the this.name then it points to it's lexical scope but there is no any variable name so it prints undefined.
 
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q7. Event Loop Basic Race 
 
// console.log("Start"); 
 
// setTimeout(() => console.log("Timeout"), 0); 
 
// Promise.resolve().then(() => console.log("Promise")); 
 
// console.log("End"); 

// Output :- Start End Promise Timeout
// Explanation :- once again it is about the event loop. priority queue is :- callstack <- microqueue <- macroqueue . so first 2 console.log() lines executed and then setTimeout() goes into the macroTaskqueue and Promise.resolve.then() goes in the microTaskqueue.
 
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q8. Arrow Function Pitfall 
 
// const group = { 
//     title: "Developers", 
//     getTitle: () => { 
//         console.log(this.title); 
//     } 
// }; 
 
// group.getTitle(); 

// Output :- undefined
// Explanation :- because getTitle is an arrow function and arrow function doesn't have it's own this ... so it points to the lexical scope and there is no any title variable to it prints undefined.
 
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q9. Chaining Returns 
 
// Promise.resolve(5) 
//     .then((val) => { 
//         console.log(val); 
//         return val + 5; 
//     }) 
//     .then((val) => console.log(val)); 
 
// Output :- 5 10
// Explanation :- Promise.resolve() caught by then method and so 5 goes to the then as a val variable and it logs the value and it returns the value with +5 and it caught by the another next then method and it logs the value..
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q10. Catch and Continue 
 
// Promise.reject("Fail") 
//     .catch((err) => { 
//         console.log(err); 
//         return "Recovered"; 
//     }) 
//     .then((res) => console.log(res)); 
 
// Output :- Fail Recovered
// Explanation :- if promise reject then it goes to the catch method and here it print the Fail now it return Recovered which was caught by next then and it print the returned value and prints Recovered..
