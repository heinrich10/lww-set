# lww-set

A simple javascript implementation of LWW-Element-Set

# Usage

You can import this as if this was a library.

On `package.json`

```
"dependencies": {
    "lww-set": "heinrich10/lww-set",
    "express": "^4.16.4",
    "amk-wrap": "^0.1.0"
    . . .
}
```

On a js file

```

const LwwSet = require('lww-set');

const lwwSet = new LwwSet();

lwwSet.add('element1', Date.now());
```

# API

**add(element, timestamp)**

- add an element to the set

**remove(element, timestamp)**

- remove an element to the set

**exist(element)**

- returns true if element exist in set

**get()**

- get all elements from the set

# Test

to run test case:
1. run `npm install`
2. run `npm test`

# Notes

Assumptions:
- this is a simple implementation, therefore, there is no validation, so if you input the wrong data type, something could go wrong
