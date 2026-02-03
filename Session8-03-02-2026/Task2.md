// Explain the execution order
```


### Code Block 2: Nested Async


```javascript
console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");
```


**Your Prediction (order):**
```
Start End Promise 2 Timeout 1 Promise 1 Timeout 2

```


**Actual Output:**
```
Start End Promise 2 Timeout 1 Promise 1 Timeout 2

```


**Explanation:**
```
Once again it is about the event loop so first synchronous lines of code executed. now the promise goes to the microTaskQueue and setTimeOut goes to the macroTaskQueue .. now in the first promise there is one line which is synchronouse so it executed immediately then there is one another setTimeout function and it goes to the macroTaskqueue .. now the first setTimeout() has synchronouse so it executed immediately then there is one another promise so it also goes in the microTaskqueue and then it prints and then previous setTimeout executed...
```
