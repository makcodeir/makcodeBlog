# parameters and return

Parameters allow functions to receive input. The `return` statement sends a result back to the caller and stops the function.

## Example
```js
function createGreeting(name = "friend") {
  return `Hello, ${name}!`;
}

console.log(createGreeting("Maya"));
console.log(createGreeting());
```
