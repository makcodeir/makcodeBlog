# break and continue

`break` exits a loop immediately. `continue` skips the current iteration and moves to the next one.

## Example
```js
for (let number = 1; number <= 5; number++) {
  if (number === 2) {
    continue;
  }

  if (number === 4) {
    break;
  }

  console.log(number);
}
```
