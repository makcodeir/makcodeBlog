# map filter reduce

`map`, `filter`, and `reduce` are used to transform arrays, select matching items, and calculate a single result.

## Example
```js
const prices = [10, 20, 30];

const doubled = prices.map((price) => price * 2);
const expensive = prices.filter((price) => price >= 20);
const total = prices.reduce((sum, price) => sum + price, 0);

console.log(doubled, expensive, total);
```
