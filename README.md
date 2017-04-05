This module provides a reference [curry](https://en.wikipedia.org/wiki/Currying) implementation in Javascript (ES6)

```
const testFn = function(foo, bar, baz) {
    return foo + bar + baz
}

t.equal(curry(testFn)(1)(2)(3), 6)

```
