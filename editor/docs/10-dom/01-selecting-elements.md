# selecting elements

The DOM represents a web page as JavaScript-accessible objects. Use selectors to find elements before reading or changing them.

## Example
```js
const title = document.querySelector("h1");
const buttons = document.querySelectorAll("button");

console.log(title.textContent);
console.log(buttons.length);
```
