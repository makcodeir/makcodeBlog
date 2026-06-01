# let and const

Use `let` for values that can change and `const` for values that should stay fixed.

## Rules
- `let` allows reassignment.
- `const` does not allow reassignment.
- Both `let` and `const` are block scoped.

## Example
```js
let score = 10;
score = 15;

const appName = "JS Editor";
console.log(score, appName);
```
