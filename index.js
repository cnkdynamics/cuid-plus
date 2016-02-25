//- © 2015 CNK Dynamics Co.
"use strict";

/**
 * Returns the timestamp portion of the `cuid` ids as a Date
 * @param  {string} id cuid string
 * @return {Date}    date
 */
exports.getTimestamp = function (id) {
    if (!id) {
        return new ReferenceError("Invalid parameter.");
    } else if (!this.isValid(id) || typeof id !== 'string') {
        return new TypeError("Not a valid cuid.");
    }
    return new Date(parseInt(id.substr(1, 8), 36));
};

/**
 * Returns true if the value is a valid cuid ids, return false otherwise.
 * @param  {string}  id cuid string
 * @return {Boolean}   <code>true/false</code>
 */
exports.isValid = function (id) {
    let ID_LENGTH = 25,
        ID_PREFIX = "c";
    if (!id) {
        return new ReferenceError("Invalid parameter.");
    }
    return id.length === ID_LENGTH && id.substr(0,1) === ID_PREFIX;
};
