var StorageInterface = require('module/storage/storage.interface');

/**
 * Storage service using window.localStorage
 *
 * @constructor
 */
var LocalStorageService = function () {

};

// Inheritance
LocalStorageService.prototype = Object.create(StorageInterface.prototype);
LocalStorageService.constructor = LocalStorageService;

/**
 * @inheritDoc
 */
LocalStorageService.prototype.setData = function (key, value) {

    window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @inheritDoc
 */
LocalStorageService.prototype.getData = function (key) {

    var value = window.localStorage.getItem(key);

    if (!!value ) {

        value = JSON.parse(value);
    }

    return value;
};

/**
 * @inheritDoc
 */
LocalStorageService.prototype.removeData = function (key) {

    window.localStorage.removeItem(key);
};

module.exports = LocalStorageService;