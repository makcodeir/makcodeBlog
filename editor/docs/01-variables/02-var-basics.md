# var basics

`var` is function scoped and older than `let` and `const`.

## Important notes
- `var` can be redeclared in the same scope.
- `var` is hoisted and initialized with `undefined`.
- Prefer `let` and `const` in modern JavaScript.

## Example
```js
function demo() {
  if (true) {
    var message = "Visible in whole function";
  }
  console.log(message);
}

demo();
```
