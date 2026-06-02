# methods and this

A method is a function stored on an object. Inside a regular method, `this` refers to the object that called the method.

## Example
```js
const user = {
  name: "Jordan",
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(user.greet());
```
