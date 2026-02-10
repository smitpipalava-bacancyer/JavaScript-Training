### Code Block 4: Complex Async Chain


```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");
```


**Your Prediction (order):**
```
1 7 3 4 5 2 6 
```


**Actual Output:**
```
1 7 3 4 5 2 6 
```


**Explanation:**
```
first 1 will be logged after that settimeout callback function will be pushed into macrotask queue then queuemicrotask function callback and resolved promise's callback function will be pushed into microtask queue after that another setimeout callback function will be pushed into macrotask queue and then 7 will be logged and call stack becomes empty now event loop will push queuemicrotask function callback into callstack which logs 3 after that it will push resolved promise's callback into callstack which logs 4 and one more queuemicrotask function callback will be added into microtask queue after that event loop will push newly added queuemicrotask function callback and logs 5 and at last event loop pushed two settimeout callback one after another which logs 2 6  code -4