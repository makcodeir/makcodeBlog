# promises

A promise represents a value that may be available now, later, or never. Use `.then()` for success and `.catch()` for failure.

## Example
```js
const request = Promise.resolve("Data loaded");

request
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  });
```
