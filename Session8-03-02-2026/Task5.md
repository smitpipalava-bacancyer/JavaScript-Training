// Explain the execution order
```


### Code Block 5: Async/Await


```javascript
console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");
```


**Your Prediction (order):**
```
Start Async 1 End Async 2 Promise 1 Timeout
```


**Actual Output:**
```
Start Async 1 End Async 2 Promise 1 Timeout
```


**Explanation:**
```
first Start will be logged after that asyncFunction is invoked and inside that Async 1 will be logged and after that callback for promise inside asyncFunction will be added to the microtask queue then asyncFunction is returned now another .then callback of resolved promise will be added to microtask queue after that setimeout callback will be added to macrotask queue and then End is logged and call stack becomes empty now event loop will push the asyncFunction promise's callback to the call stack and logs Async 2 after that event loop adds outer promise callback to the callstack which logs Promise 1 and at last settimeout callback exectued and logs Timeout code 5