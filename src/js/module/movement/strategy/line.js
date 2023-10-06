var MovementInterface = require('module/movement/movement.interface');
var SpaceCoordinates = require('module/coordinates/space');

/**
 * Line Movement Strategy
 * A celestial moves in straight line at a given angle and speed from the origin coordinates.
 *
 * @param {SpaceCoordinates} originSpaceCoordinates
 * @param {DirectionCoordinates} directionCoordinates
 * @param {number} speed
 * @constructor
 */
var LineMovementStrategy = function (originSpaceCoordinates, directionCoordinates, speed) {

    /**
     * Origin space coordinates
     *
     * @type {SpaceCoordinates}
     */
    this.originSpaceCoordinates = originSpaceCoordinates;

    /**
     * Movement direction
     *
     * @type {DirectionCoordinates}
     */
    this.directionCoordinates = directionCoordinates;

    /**
     * Movement speed
     *
     * @type {number}
     */
    this.speed = speed;

    /**
     * Define ratio to apply to x and y movement coordinates to respect the speed
     *
     * @type {number}
     */
    this.ratio = this.speed / Math.sqrt(this.directionCoordinates.x * this.directionCoordinates.x + this.directionCoordinates.y * this.directionCoordinates.y);
};

// Inheritance to apply interface
LineMovementStrategy.prototype = Object.create(MovementInterface.prototype);
LineMovementStrategy.constructor = LineMovementStrategy;

/**
 * @inheritDoc
 */
LineMovementStrategy.prototype.getSpaceCoordinates = function (time) {

    // Define delta movement based on elapsed time
    var delta = this.ratio * this.speed * time / 1000;

    // Apply delta movement to the direction unit vector
    var x = this.originSpaceCoordinates.x + this.directionCoordinates.x * delta;
    var y = this.originSpaceCoordinates.y + this.directionCoordinates.y * delta;

    return new SpaceCoordinates(x, y);
};

module.exports = LineMovementStrategy;