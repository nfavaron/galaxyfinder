/**
 * Observer Interface
 *
 * @constructor
 */
var ObserverInterface = function () {

    // Extend to implement a specialised strategy
};

/**
 * Attach observer for @eventName with the @callback
 *
 * @param {string} eventName
 * @param {Function} callbackFunction
 * no @returns
 */
ObserverInterface.prototype.on = function (eventName, callbackFunction) {

    // Extend to implement a specialised strategy
};

/**
 * Detach observer for @eventName
 *
 * @param {string} eventName
 * @param {Function|undefined} callbackFunction
 * no @returns
 */
ObserverInterface.prototype.off = function (eventName, callbackFunction) {

    // Extend to implement a specialised strategy
};

/**
 * Triggers an event
 *
 * @param {string} eventName
 * @param {Object|Array|string|number|undefined} data
 */
ObserverInterface.prototype.trigger = function (eventName, data) {

    // Extend to implement a specialised strategy
};

module.exports = ObserverInterface;