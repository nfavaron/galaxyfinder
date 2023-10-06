var UpdatableInterface = require('module/core/updatable.interface');

/**
 * Entity interface
 *
 * @constructor
 */
var EntityInterface = function () {

};

// Implement interface
EntityInterface.prototype = Object.create(UpdatableInterface.prototype);
EntityInterface.constructor = EntityInterface;

/**
 * Initialize the entity
 *
 * no @returns
 */
EntityInterface.prototype.initialize = function () {

    // Extend to implement your logic
};

/**
 * @inheritDoc
 */
EntityInterface.prototype.update = function (time) {

    // Extend to implement your logic
};

module.exports = EntityInterface;