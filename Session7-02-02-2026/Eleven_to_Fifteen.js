// Q11. The Nested Timeout 
 
// console.log('A'); 
 
// setTimeout(() => { 
//     console.log('B'); 
// }, 0); 
 
// Promise.resolve().then(() => { 
//     console.log('C'); 
//     Promise.resolve().then(() => console.log('D')); 
// }); 
 
// console.log('E'); 
// Output :- A E C D B
// Explanation :- once again it is the question about the event loop  so as per the priority first A E will be logged because it directly goes to the callstack then Promise.resolve.then() goes in callstack and then setTimeout so it prints in this order A E C D B
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q12. Explicit Binding (Call/Apply) 
 
// const agent = { 
//     id: 101 
// }; 
 
// function showId() { 
//     console.log(this.id); 
// } 
 
// showId.call(agent); 
// showId.apply(null); 

// Output :- 101 undefined
// Explanation :- because in call method we explicitly pass the object to the function to link showId method with object agent so it prints the 101 and in apply method we didn't pass any object so it prints undefined.
 
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q13. Promise.all Failure 
 
// Promise.all([ 
//     Promise.resolve("Success 1"), 
//     Promise.reject("Error 1"), 
//     Promise.resolve("Success 2") 
// ]) 
// .then(res => console.log("Result:", res)) 
// .catch(err => console.log("Caught:", err)); 

// Output :- Caught : Error 1
// Explanation :- because in Promise.all() method if any promise fails then it directly goes in the catch() method and prints the error though other promises fullfilled but it will not display.
 
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q14. The "Callback" Context Trap 
 
// const player = { 
//     score: 50, 
//     updateScore() { 
//         setTimeout(function() { 
//             console.log(this.score); 
//         }, 100); 
//     } 
// }; 
 
// player.updateScore(); 

// Output :- undefined
// Explanation :- because in setTimeOut() function there is another function which is normal function and it can't bound with the object's property if there is an arrow function instead of it then it can access the property of the object and it will be printed...
 
//---------------------------------------------------------------------------------------------------------------------------------------------

// Q15. Throwing Inside a Chain 
 
// Promise.resolve(1) 
//     .then(x => { 
//         throw new Error("Invalid"); 
//     }) 
//     .catch(err => { 
//         console.log("Caught Error"); 
//         return 10; 
//     }) 
//     .then(x => console.log(x)); 
 
// Output :- Caught Error , 10
// Explanation :- first of all promise resolved so it goes into the first then so it throws an error which was caught by the catch method and so it prints the caught error and it returns 10 and it was caught by next then and it prints 10.