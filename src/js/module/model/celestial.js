var UpdatableInterface = require('module/core/updatable.interface');

/**
 * Abstract model representing a celestial object in space
 *
 * @param {string} name
 * @constructor
 */
var CelestialModel = function (name) {

    /**
     * Celestial name
     *
     * @type {string}
     */
    this.name = name;

    /**
     * Coordinates defining the coordinates in space
     *
     * @type {SpaceCoordinates|null}
     */
    this.spaceCoordinates = null;

    /**
     * Movement strategy
     *
     * @type {MovementInterface|null}
     */
    this.movementStrategy = null;
};

// Implement interface
CelestialModel.prototype = Object.create(UpdatableInterface.prototype);
CelestialModel.constructor = CelestialModel;

/**
 * @inheritDoc
 */
CelestialModel.prototype.update = function (time) {

    // Extend to implement your logic
};

/**
 * Set the celestial's coordinates in space
 *
 * @param {SpaceCoordinates} spaceCoordinates
 * no @returns
 */
CelestialModel.prototype.setSpaceCoordinates = function (spaceCoordinates) {

    this.spaceCoordinates = spaceCoordinates;
};

/**
 * Get the celestial's coordinates in space
 *
 * @returns {SpaceCoordinates}
 */
CelestialModel.prototype.getSpaceCoordinates = function () {

    return this.spaceCoordinates;
};

/**
 * Set the movement strategy
 *
 * @param {MovementInterface|null} movementStrategy
 */
CelestialModel.prototype.setMovement = function (movementStrategy) {

    this.movementStrategy = movementStrategy;
};

/**
 * Get the movement strategy
 *
 * @returns {MovementInterface}
 */
CelestialModel.prototype.getMovement = function () {

    return this.movementStrategy;
};

module.exports = CelestialModel;