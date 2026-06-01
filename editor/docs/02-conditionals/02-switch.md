# switch

Use `switch` when comparing one value against many cases.

## Tips
- Use `break` to stop fallthrough.
- Use `default` for unmatched cases.

## Example
```js
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}
```
