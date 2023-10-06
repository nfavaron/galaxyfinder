var UpdatableInterface = require('module/core/updatable.interface');

/**
 * Core application
 *
 * @param {RenderingInterface} renderingStrategy
 * @param {UniverseModel} universeModel
 * @constructor
 */
var ApplicationCore = function (renderingStrategy, universeModel) {

    /**
     * @type {RenderingInterface}
     */
    this.renderingStrategy = renderingStrategy;

    /**
     * @type {UniverseModel}
     */
    this.universeModel = universeModel;

    /**
     * Start time in milliseconds
     *
     * @type {number}
     */
    this.startTime = 0;
};

// Implement interface
ApplicationCore.prototype = Object.create(UpdatableInterface.prototype);
ApplicationCore.constructor = ApplicationCore;

/**
 * Start the application
 *
 * no @returns
 */
ApplicationCore.prototype.start = function () {

    // Keep start time
    this.startTime = Date.now();

    // First update at time 0
    this.update(0);
};

/**
 * @inheritDoc
 */
ApplicationCore.prototype.update = function (time) {

    // Update the universe
    this.universeModel.update(time);

    // Update the rendering
    this.renderingStrategy.update(time);

    // Request application update on every frame
    requestAnimationFrame(this.update.bind(this, Date.now() - this.startTime));
};

module.exports = ApplicationCore;