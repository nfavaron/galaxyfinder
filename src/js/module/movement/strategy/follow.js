var MovementInterface = require('module/movement/movement.interface');
var SpaceCoordinates = require('module/coordinates/space');
var DirectionCoordinates = require('module/coordinates/direction');

/**
 * Follow Movement Strategy
 * Following another celestial, at a given speed.
 *
 * @param {SpaceCoordinates} originSpaceCoordinates
 * @param {CelestialModel} celestialModel
 * @param {number} speed
 * @constructor
 */
var FollowMovementStrategy = function (originSpaceCoordinates, celestialModel, speed) {

    /**
     * Origin space coordinates
     *
     * @type {SpaceCoordinates}
     */
    this.originSpaceCoordinates = originSpaceCoordinates;

    /**
     * Celestial object acting as movement origin
     *
     * @type {CelestialModel}
     */
    this.celestialModel = celestialModel;

    /**
     * Movement speed
     *
     * @type {number}
     */
    this.speed = speed;

    /**
     * Last recorded time
     *
     * @type {number}
     */
    this.lastTime = 0;

    /**
     * Movement completed ?
     * 
     * @type {boolean}
     */
    this.completed = false;
};

// Inheritance to apply interface
FollowMovementStrategy.prototype = Object.create(MovementInterface.prototype);
FollowMovementStrategy.constructor = FollowMovementStrategy;

/**
 * @inheritDoc
 */
FollowMovementStrategy.prototype.getSpaceCoordinates = function (time) {

    // Destination coordinates in space
    var destinationSpaceCoordinates = this.celestialModel.getSpaceCoordinates();
    var x = destinationSpaceCoordinates.x;
    var y = destinationSpaceCoordinates.y;
    
    // Movement not completed yet
    if (this.completed === false) {

        // Distance per axis
        var distanceX = destinationSpaceCoordinates.x - this.originSpaceCoordinates.x;
        var distanceY = destinationSpaceCoordinates.y - this.originSpaceCoordinates.y;

        // Total distance
        var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        // Elapsed time since last recorded time
        var elapsed = time - this.lastTime;

        // If total distance greater than movement since last recorded time
        if (distance > (this.speed * elapsed / 1000)) {

            // Direction as a unit vector
            var directionCoordinates = new DirectionCoordinates(distanceX, distanceY);

            // Define ratio to apply to x and y movement coordinates to respect the speed
            var ratio = this.speed / Math.sqrt(directionCoordinates.x * directionCoordinates.x + directionCoordinates.y * directionCoordinates.y);

            // Define delta movement based on elapsed time
            var delta = ratio * this.speed * elapsed / 1000;

            // Apply delta movement to the distance per axis
            x = this.originSpaceCoordinates.x + directionCoordinates.x * delta;
            y = this.originSpaceCoordinates.y + directionCoordinates.y * delta;
        } else {
            
            // Destination reached, movement completed
            this.completed = true;
        }

        // Replace origin coordinates
        this.originSpaceCoordinates = new SpaceCoordinates(x, y);

        // Keep last recorded time
        this.lastTime = time;
    }

    // Return new instance of SpaceCoordinates to avoid object reference
    return new SpaceCoordinates(x, y);
};

module.exports = FollowMovementStrategy;