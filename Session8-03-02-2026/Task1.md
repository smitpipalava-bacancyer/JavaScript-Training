## Task 1: Predict Output of Async Code


### Objective
Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


### Requirements
1. Predict the output order for each code block
2. Run the code and compare with your prediction
3. Explain the execution order based on the event loop


### Code Block 1: Basic Async


```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");
```


**Your Prediction (order):**
```
Write the order you expect: 1, ?, ?, ?
 4 3 2
```


**Actual Output:**
```
Run and write the actual order
1 4 3 2
```


**Explanation:**
```first synchronous line of the code executed and then all other code of line will be executed . now there are 2 types of queue microqueue and macroqueue and microqueue has a higher priority then macroqueue .. so first it executed and then macroqueue tasks will be executed.. so promise goes to the microqueue and setTimeout goes to the macroqueue. after when callstack becomes empty then all the tasks from queue comes and executed as per the priority which is mentioned before.
