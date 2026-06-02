# hoisting

Hoisting means JavaScript processes declarations before running code. `var` declarations are initialized as `undefined`, while `let` and `const` are not usable before their declaration line.

## Example
```js
console.log(count); // undefined
var count = 3;

let total = 5;
console.log(total); // 5
```
