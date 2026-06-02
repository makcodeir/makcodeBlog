# changing content

After selecting an element, JavaScript can update its text, attributes, classes, and styles.

## Example
```js
const status = document.querySelector("#status");

status.textContent = "Saved";
status.classList.add("success");
status.setAttribute("role", "status");
```
