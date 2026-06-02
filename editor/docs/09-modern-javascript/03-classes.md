# classes

Classes provide a structured syntax for creating objects with shared behavior. The `constructor` method initializes each new instance.

## Example
```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const user = new User("Morgan");
console.log(user.greet());
```
