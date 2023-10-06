var UpdatableInterface = require('module/core/updatable.interface');

/**
 * Rendering interface
 *
 * @constructor
 */
var RenderingInterface = function () {

};

// Implement interface
RenderingInterface.prototype = Object.create(UpdatableInterface.prototype);
RenderingInterface.constructor = RenderingInterface;

/**
 * @inheritDoc
 */
RenderingInterface.prototype.update = function (time) {

    // Extend to implement your logic
};

/**
 * Register a model that can be updated
 *
 * @param {UpdatableInterface} model
 * no @returns
 */
RenderingInterface.prototype.register = function (model) {

    // Extend to implement your logic
};

/**
 * Unregister a model that can be updated
 *
 * @param {UpdatableInterface} model
 * no @returns
 */
RenderingInterface.prototype.unregister = function (model) {

    // Extend to implement your logic
};

module.exports = RenderingInterface;