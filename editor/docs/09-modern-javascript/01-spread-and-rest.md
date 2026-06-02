# spread and rest

The `...` syntax can spread values out or gather values together. Spread copies values into a new structure, while rest collects remaining values.

## Example
```js
const numbers = [1, 2, 3];
const copy = [...numbers, 4];

function sum(...values) {
  return values.reduce((total, value) => total + value, 0);
}

console.log(copy);
console.log(sum(1, 2, 3));
```
