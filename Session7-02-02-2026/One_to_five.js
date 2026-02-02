// Q1. Simple Object Context 
// const laptop = { 
//     brand: "Dell", 
//     getBrand: function() { 
//         return this.brand; 
//     } 
// }; 
// const myBrand = laptop.getBrand(); 
// console.log(myBrand);

// output :- Dell
// Explanation :- because getBrand is normal function and it directly points to the brand property so it returns Dell to the myBrand variable and when we try to log it then it prints it.


//---------------------------------------------------------------------------------------------------------------------------------------------
 
// Q2. Basic Promise Flow 
// console.log(1); 
// Promise.resolve().then(() => { 
//     console.log(2); 
// }); 
// console.log(3); 


// Output :- 1 3 2
// Exaplanation :- It is the question of the event loop and in js priority queue is look like that : callstack <- microqueue <- macroqueue.  now in the question there is first line which is console.log() so it first print it then there is Promise.resolve().then() so it goes to the microTaskqueue and js moves to the third line which is again console.log() so it print it. now the task which is in the microTaskqueue comes into the callstack and executed so the output becomes 1 3 2.

//---------------------------------------------------------------------------------------------------------------------------------------------

// Q3. The Broken Chain 
 
// Promise.reject("Error Occurred") 
//     .then(() => console.log("Success")) 
//     .catch((err) => console.log(err)); 

// Output :- "Error Occurred"
// Explanation :- because Promise.reject() goes into the catch() method and whatever inside the reject method caught by the method and printed.


//---------------------------------------------------------------------------------------------------------------------------------------------

// Q4. Global vs. Local Scope 
 
// var status = "Offline"; 
 
// const server = { 
//     status: "Online", 
//     getStatus: function() { 
//         return this.status; 
//     } 
// }; 
 
// console.log(server.getStatus());

// Output :- Online
// Explanation :- because getStatus is a normal function and called by the server object now when we run the function then it gives us Online as a value..

//---------------------------------------------------------------------------------------------------------------------------------------------

// Q5. Math in Promises 
 
// Promise.resolve(10) 
//     .then((num) => num * 2) 
//     .then((result) => console.log(result)); 


// Output :- 20
// Explanation :- promise.resolve caught by then method so it first gave 10 to first then() method and then it multiply by 2 and returns it as a promise and this value caught by another then method and it console it.
//---------------------------------------------------------------------------------------------------------------------------------------------