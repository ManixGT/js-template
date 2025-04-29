# 📜 JS Promise: Basic to Advanced

## Core Concepts

- **then and catch are promise handling methods**

- `.then()` activates when `resolve()` is called → **Promise moves to "Fulfilled" state.**
-  `.catch()` activates when `reject()` is called → **Promise moves to "Rejected" state.**
- `.then()` and `.catch()` are available on the **prototype chain** (`__proto__`) of a Promise instance.

```
javascript
instance.then(v => {
    console.log("2 .then fullfilled promise Value is", v);
});
```
- Every .then() attaches separately to the original promise.

- No "info sharing" between different .then() calls unless you chain them.

- It creates a brand new Promise internally.

- This new Promise waits for instance to settle.

- It does NOT know anything about other .then() calls on the same instance.

- **Memory-wise**:
Each .then() holds its own closure (callback function and context) — so yes, it has its own "memory" to track things separately.

- `.then().then()` - chaining , and share info in between


- Log Promise immediately ➔ shows <pending>.
- Expand Promise ➔ you might see fulfilled already.
- Because logging is sync, but Promise settling is async. Event loop is still processing promise in micro task portion

- **Chaining of Promise handler methods** - If you chain .then or .catch multiple time it will also slow the execution as well. Bcz they get resolve or rejected one by one.

- **Note** - resolve() or reject() the promise doesn't means the function get stopped , if you write something after the resolve or reject the promise , that gonna run as well.
Only `return resolve or reject` stop that function right there.

---

> Mastering JavaScript! 🚀
