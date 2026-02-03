### Code Block 3: Multiple Microtasks


```javascript
console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");
```


**Your Prediction (order):**
```
A G B D E C F
```


**Actual Output:**
```
A G B D E C F
```


**Explanation:**
```
First synchronous line of code will be executed. So A and G will be printed then promise are going to executed as per the priority and it prints the B then there is another promise so it will not executed but it goes to the microqueue and then print the synchronous and let to execute the promise which is already in the queue and print E and then the promise will be executed and print the C and then setTimeout comes 
from the macroTaskQueue and print the F.
```
