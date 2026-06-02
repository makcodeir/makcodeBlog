# fetch

`fetch` makes HTTP requests from the browser. It returns a promise that resolves to a response object.

## Example
```js
async function loadUser() {
  const response = await fetch("https://api.example.com/user");
  const user = await response.json();

  console.log(user.name);
}
```
