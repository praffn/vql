vql.js
===
*a very quick javascript library for doing very quick stuff…*

[![Build Status](https://travis-ci.org/praffn/vql.svg?branch=master)](https://travis-ci.org/praffn/vql)

* * * * * * * * * * * * * * * *

vql is a small auxiliary library and a snappy, more performant replacement for many of javascript's slow native functions.

Install
---
```bash
$ npm install vql
```

Usage
-----
```javascript
var vql = require('vql');
```

API
---

### vql.forEach
```javascript
vql.forEach(array, callback, thisArg);
```
Iterates over an array, invoking callback for each element

##### Parameters
1. `array` *(Array)*: The array to iterate over
2. `callback` *(Function)*: The callback to invoke on each item. You can return false in the callback to break the loop.
  1. `value` *(Any)*: The value of the current element
  2. `index` *(Number)*: The current index
  3. `array` *(Array)*: A reference to the array currently being iterated
3. `thisArg` *(Object)*: The context

```javascript
vql.forEach([1, 2, 3, 4], function (value) {
  console.log(value);
});
// will console log 1, 2, 3, 4
```

### vql.concat
```javascript
vql.concat(firstList, secondList);
```
Concatenates two lists into a single one

##### Parameters
1. `firstList` *(Array)*: The first array
2. `secondList` *(Array)*: The second array

##### Returns
*(Array)*: The concatenation of the two lists

```javascript
vql.concat([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3, 4, 5, 6]
```

### vql.indexOf
```javascript
vql.indexOf(array, value);
```
Return the first index of the element that matches the value. If not match was found return -1

##### Parameters
1. `array` *(Array)*: The array in which to find the first index of the value
2. `value` *(Any)*: The value to find the first index of.

##### Returns
*(Number)*: The index of the first match OR -1

```javascript
vql.indexOf(['yes', 'no', 'maybe'], 'maybe');
// => 2
```

### vql.fill
```javascript
vql.fill(array, value);
```
Returns a new array with same length but all element are a copy of *value*.

##### Parameters
1. `array` *(Array)*: The array to copy
2. `value` *(Any)*: The value to fill new array with

##### Returns
*(Array)*: Array filled with *value*

```javascript
vql.fill([1, 2, 3], 'waoaw');
// => ['waoaw', 'waoaw', 'waoaw']
```
