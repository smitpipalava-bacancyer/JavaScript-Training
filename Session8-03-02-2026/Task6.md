## Task 2: setTimeout Examples


### Objective
Complete and understand various setTimeout scenarios.


### Exercise 1: Basic setTimeout


**Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.


```javascript
// TODO: Implement countWithDelay function
function countWithDelay() {
    let count = 1;
    const intervalId = setInterval(()=>{
        if(count <= 5){
            console.log(count);
            count++;
        }else{
            clearInterval(intervalId);
            return;
        }
    },1000);
}


countWithDelay();
```


**Expected Output:**
```
1  // after 1 second
2  // after 2 seconds
3  // after 3 seconds
4  // after 4 seconds
5  // after 5 seconds
```

