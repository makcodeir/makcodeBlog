# template literals

Template literals use backticks and allow expressions inside `${}`. They are useful for readable string interpolation.

## Example
```js
const product = "Notebook";
const price = 12;

const label = `${product} costs $${price}.`;
console.log(label);
```
