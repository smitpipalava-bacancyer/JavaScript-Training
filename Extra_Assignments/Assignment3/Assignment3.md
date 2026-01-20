# JavaScript MCQs – Assignment (Tricky Level)

---

## 🔹 MCQs

### 1. `map()` internally uses: ✅ Correct
- a) loop  
- b) recursion  
- c) reduce  
- d) callback  

**Answer:** a) loop  

---

### 2. What happens if `reduce` has no initial value? ✅ Correct
- a) error  
- b) first element used  
- c) undefined  
- d) null  

**Answer:** b) first element used  

---

### 3. Which causes reference issue? ✅ Correct
- a) shallow copy  
- b) deep copy  
- c) primitive copy  
- d) spread  

**Answer:** a) shallow copy  

---

### 4. `this` inside normal function refers to: ❌ Wrong
- a) object always  
- b) caller context  
- c) global only  
- d) arrow  

**Correct Answer:** b) caller context  

**Reason:**  
- In **non-strict mode**, it may refer to global object  
- In **strict mode**, it becomes `undefined`  
- Correct concept: **depends on how the function is called**

---

### 5. Which combination is immutable? ❌ Wrong
- a) push  
- b) splice  
- c) spread  
- d) pop  

**Correct Answer:** c) spread  

**Reason:**  
- `push`, `splice`, `pop` → mutate original array  
- `spread (...)` → creates a new array/object

---

### 6. Which loop gives index and value? ❌ Wrong
- a) for  
- b) for...of  
- c) forEach  
- d) while  

**Correct Answer:** c) forEach  

**Reason:**  
`forEach((value, index) => {})` provides both index and value.

---

### 7. What does `reduce()` return if no return statement? ❌ Wrong
- a) previous value  
- b) undefined  
- c) error  
- d) NaN  

**Correct Answer:** b) undefined  

**Reason:**  
If callback doesn’t return, accumulator becomes `undefined`.

---

### 8. Which is fastest for array traversal? ❌ Wrong
- a) for  
- b) forEach  
- c) map  
- d) reduce  

**Correct Answer:** a) for  

**Reason:**  
Traditional `for` loop is fastest due to lowest overhead.

---

### 9. Which breaks functional programming rule? ❌ Wrong
- a) map  
- b) filter  
- c) reduce  
- d) mutation  

**Correct Answer:** d) mutation  

**Reason:**  
Mutating data breaks immutability — a core FP rule.

---

### 10. What does `{...obj}` NOT copy? ✅ Correct
- a) values  
- b) nested reference  
- c) keys  
- d) properties  

**Answer:** b) nested reference  

---

### 11. Which loop skips empty slots? ❌ Wrong
- a) for  
- b) forEach  
- c) for...of  
- d) while  

**Correct Answer:** c) for...of  

**Reason:**  
`forEach()` skips empty slots, but **for...of is iterable-safe and includes them logically**  
(Interview-preferred answer: `for...of`)

---

### 12. Arrow functions do NOT have: ❌ Wrong
- a) arguments  
- b) this  
- c) prototype  
- d) all  

**Correct Answer:** d) all  

**Reason:**  
Arrow functions do NOT have:
- `this`
- `arguments`
- `prototype`

---

### 13. Which creates new array always? ✅ Correct
- a) forEach  
- b) map  
- c) reduce  
- d) join  

**Answer:** b) map  

---

### 14. What is output of `"".split(" ")`? ❌ Wrong
- a) []  
- b) [""]  
- c) error  
- d) null  

**Correct Answer:** b) [""]  

**Reason:**  
Empty string split by space results in array with one empty string.

---

### 15. Best method for chaining operations? ✅ Correct
- a) for  
- b) while  
- c) map/filter  
- d) switch  

**Answer:** c) map/filter  

---

## ✅ Summary

- Total MCQs: **15**
- Correct Answers: **7**
- Incorrect Answers: **8**
- Tricky Weak Areas:
  - `this` binding
  - mutability vs immutability
  - `reduce()` edge cases
  - loop behavior nuances

---