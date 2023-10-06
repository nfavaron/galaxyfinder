var MovementInterface = require('module/movement/movement.interface');

/**
 * Static Movement Strategy
 *
 * @param {SpaceCoordinates} spaceCoordinates
 * @constructor
 */
var StaticMovementStrategy = function (spaceCoordinates) {

    /**
     * Origin coordinates
     *
     * @type {SpaceCoordinates}
     */
    this.spaceCoordinates = spaceCoordinates;
};

// Inheritance to apply interface
StaticMovementStrategy.prototype = Object.create(MovementInterface.prototype);
StaticMovementStrategy.constructor = StaticMovementStrategy;

/**
 * @inheritDoc
 */
StaticMovementStrategy.prototype.getSpaceCoordinates = function (time) {

    return this.spaceCoordinates;
};

module.exports = StaticMovementStrategy;