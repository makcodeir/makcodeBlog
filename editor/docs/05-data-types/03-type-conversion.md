# type conversion

Type conversion changes a value from one type to another. JavaScript can convert values automatically, but explicit conversion is usually clearer.

## Example
```js
const input = "42";
const amount = Number(input);

console.log(amount + 8); // 50
console.log(String(amount)); // "42"
console.log(Boolean(amount)); // true
```
