# scope

Scope controls where a variable can be accessed. JavaScript commonly uses global scope, function scope, and block scope.

## Example
```js
const globalName = "Editor";

function greet() {
  const localMessage = "Hello";

  if (true) {
    let punctuation = "!";
    console.log(localMessage + ", " + globalName + punctuation);
  }
}

greet();
```
