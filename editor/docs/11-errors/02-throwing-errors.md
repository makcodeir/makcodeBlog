# throwing errors

Use `throw` to create a custom error when code receives invalid input or reaches an unexpected state.

## Example
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

console.log(divide(10, 2));
```
