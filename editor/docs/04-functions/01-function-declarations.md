# function declarations

A function declaration defines reusable code with a name. Function declarations are hoisted, so they can be called before they appear in the file.

## Example
```js
function add(a, b) {
  return a + b;
}

const total = add(4, 6);
console.log(total); // 10
```
