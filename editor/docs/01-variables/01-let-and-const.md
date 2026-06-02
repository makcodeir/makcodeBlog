# let and const

`let` and `const` declare block-scoped variables. Use `let` when a value needs to change, and use `const` when the variable should keep the same assignment.

## Example
```js
let score = 10;
score = 15;

const appName = "JS Editor";

console.log(score); // 15
console.log(appName); // JS Editor
```
