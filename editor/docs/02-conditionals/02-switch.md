# switch

Use `switch` when one value needs to be compared against several possible cases. Add `break` to stop execution after a matching case.

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
