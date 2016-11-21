# cuid-plus

[cuid](https://npmjs.org/package/cuid) add-on functions.

`getTimestamp(id)` Returns the timestamp portion of the `cuid` ids as a Date.

`isValid(id)` Returns `true` if the value is a valid `cuid` ids, return `false` otherwise.

The `id` param is considered valid if the following are met:

- 25 characters long
- Starts with the "c" prefix identifier

See the `cuid`  [breakdown](https://github.com/ericelliott/cuid#installing) for details.

## Installing
```
$ npm install cuid-plus --save
```

## Example
```
var cuid = require("cuid"),
    cuidplus = require("cuid-plus");

var ids = cuid();
console.log(ids);
// OUTPUT: ch72gsb320000udocl363eofy

// Get timestamp from id
var timestamp = cuidplus.getTimestamp(ids);
console.log(timestamp);
// OUTPUT: Fri Sep 14 2012 07:03:12 GMT+0800 (PHT)

// Check if ids is valid
if (!cuidplus.isValid(ids)) {
    console.log("Invalid IDs");
}
...
```

## Test
```
$ cd cuid-plus
$ npm install
$ test
```

## Credit
- By [cnkdynamics](https://github.com/cnkdynamics)
- [cuid](https://npmjs.org/package/cuid) by Eric Elliott
