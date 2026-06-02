# async await

`async` and `await` make promise-based code easier to read. An `async` function always returns a promise, and `await` pauses until a promise settles.

## Example
```js
async function loadMessage() {
  const message = await Promise.resolve("Ready");
  return message;
}

loadMessage().then((message) => {
  console.log(message);
});
```
