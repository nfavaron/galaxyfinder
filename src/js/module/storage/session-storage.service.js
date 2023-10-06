var StorageInterface = require('module/storage/storage.interface');

/**
 * Storage service using window.sessionStorage
 *
 * @constructor
 */
var SessionStorageService = function () {

};

// Inheritance
SessionStorageService.prototype = Object.create(StorageInterface.prototype);
SessionStorageService.constructor = SessionStorageService;

/**
 * @inheritDoc
 */
SessionStorageService.prototype.setData = function (key, value) {

    window.sessionStorage.setItem(key, JSON.stringify(value));
};

/**
 * @inheritDoc
 */
SessionStorageService.prototype.getData = function (key) {

    var value = window.sessionStorage.getItem(key);

    if (!!value ) {

        value = JSON.parse(value);
    }

    return value;
};

/**
 * @inheritDoc
 */
SessionStorageService.prototype.removeData = function (key) {

    window.sessionStorage.removeItem(key);
};

module.exports = SessionStorageService;