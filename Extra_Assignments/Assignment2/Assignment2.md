# JavaScript MCQs – Assignment (Intermediate Level)

---

## 🔹 MCQs

### 1. `for...of` works on: ✅ Correct
- a) Objects  
- b) Arrays  
- c) Functions  
- d) Numbers  

**Answer:** b) Arrays

---

### 2. `for...in` returns: ✅ Correct
- a) Values  
- b) Indexes / keys  
- c) Functions  
- d) Length  

**Answer:** b) Indexes / keys

---

### 3. What happens if `return` is missing in `reduce()`? ❌ Wrong
- a) Error  
- b) undefined  
- c) previous value  
- d) infinite loop  

**Correct Answer:** b) undefined  

**Reason:**  
If `reduce()` callback does not return a value, the accumulator becomes `undefined` in the next iteration.  
It **does NOT** create an infinite loop.

---

### 4. Which method is best for transforming data? ❌ Wrong
- a) filter  
- b) reduce  
- c) map  
- d) forEach  

**Correct Answer:** c) map  

**Reason:**  
- `map()` → transforms each element  
- `filter()` → removes elements  
- `reduce()` → accumulates values  

---

### 5. What does spread operator NOT do? ✅ Correct
- a) Copy array  
- b) Merge arrays  
- c) Deep copy  
- d) Expand values  

**Answer:** c) Deep copy

---

### 6. Which loop cannot be stopped using `break`? ✅ Correct
- a) for  
- b) while  
- c) do-while  
- d) forEach  

**Answer:** d) forEach

---

### 7. What is the output of `[].reduce((a, b) => a + b, 0)`? ❌ Wrong
- a) error  
- b) 0  
- c) undefined  
- d) null  

**Correct Answer:** b) 0  

**Reason:**  
Initial value is `0`, and the array is empty, so `reduce()` directly returns the initial value.

---

### 8. What does `this` refer to in an arrow function? ✅ Correct
- a) object  
- b) function  
- c) parent scope  
- d) undefined  

**Answer:** c) parent scope

---

### 9. Which creates a shallow copy? ❌ Wrong
- a) Object.assign  
- b) spread  
- c) both  
- d) none  

**Correct Answer:** c) both  

**Reason:**  
Both `Object.assign()` and spread operator (`...`) create **shallow copies**.

---

### 10. Which method skips items conditionally? ✅ Correct
- a) map  
- b) reduce  
- c) filter  
- d) join  

**Answer:** c) filter

---

### 11. Which is mutable? ❌ Wrong
- a) map  
- b) filter  
- c) reduce  
- d) forEach  

**Correct Answer:** d) forEach  

**Reason:**  
- `map()`, `filter()`, `reduce()` → return new values  
- `forEach()` → often used to mutate original array

---

### 12. What does `split("")` do? ✅ Correct
- a) splits by word  
- b) splits by space  
- c) splits by character  
- d) error  

**Answer:** c) splits by character

---

### 13. Which is best for accumulating values? ✅ Correct
- a) map  
- b) reduce  
- c) forEach  
- d) join  

**Answer:** b) reduce

---

### 14. Which loop is NOT iterable-safe? ❌ Wrong
- a) for  
- b) for...of  
- c) forEach  
- d) while  

**Correct Answer:** c) forEach  

**Reason:**  
`forEach()` cannot be broken using `break`, `continue`, or `return`.

---

### 15. Spread operator on object does what? ✅ Correct
- a) mutates object  
- b) copies properties  
- c) deletes keys  
- d) freezes object  

**Answer:** b) copies properties

---

## ✅ Summary

- Total MCQs: **15**
- Correct Answers: **9**
- Incorrect Answers: **6**
- Key Weak Areas:
  - `reduce()` behavior
  - `map()` vs `reduce()`
  - mutability
  - shallow copy concepts

---
