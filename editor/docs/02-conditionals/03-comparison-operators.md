# comparison operators

Comparison operators check relationships between values and return `true` or `false`. Prefer strict equality (`===`) because it compares both value and type.

## Example
```js
const age = 21;

console.log(age >= 18); // true
console.log(age === "21"); // false
console.log(age !== 18); // true
```
