# try catch

`try...catch` handles errors without stopping the entire program. Code that may fail goes in `try`, and recovery logic goes in `catch`.

## Example
```js
try {
  const data = JSON.parse('{"name":"Kai"}');
  console.log(data.name);
} catch (error) {
  console.log("Invalid JSON", error.message);
}
```
