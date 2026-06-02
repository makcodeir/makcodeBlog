# modules

Modules split JavaScript into reusable files. Use `export` to share code and `import` to use it in another file.

## Example
```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";

console.log(add(2, 3));
```
