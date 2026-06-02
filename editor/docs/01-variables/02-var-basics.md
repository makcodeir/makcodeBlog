# var basics

`var` is the older way to declare variables in JavaScript. It is function-scoped, can be redeclared, and is hoisted with an initial value of `undefined`.

## Example
```js
function showMessage() {
  if (true) {
    var message = "Visible inside the whole function";
  }

  console.log(message);
}

showMessage();
```
