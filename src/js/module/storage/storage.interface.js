/**
 * Storage interface
 *
 * @constructor
 */
var StorageInterface = function () {

    // Extend to implement a specialised strategy
};

/**
 * Store @value identified by @key
 *
 * @param {string} key
 * @param {number|string|object} value
 * no @returns
 */
StorageInterface.prototype.setData = function (key, value) {

    // Extend to implement a specialised strategy
};

/**
 * Returns the data identified by @key
 *
 * @param {string} key
 * @returns {number|string|object|null}
 */
StorageInterface.prototype.getData = function (key) {

    // Extend to implement a specialised strategy
};

/**
 * Removes the data identified by @key
 *
 * @param {string} key
 * no @returns
 */
StorageInterface.prototype.removeData = function (key) {

    // Extend to implement a specialised strategy
};

module.exports = StorageInterface;