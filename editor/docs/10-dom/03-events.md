# events

Events let JavaScript respond to user actions such as clicks, typing, and form submissions. Use `addEventListener` to attach a handler.

## Example
```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```
