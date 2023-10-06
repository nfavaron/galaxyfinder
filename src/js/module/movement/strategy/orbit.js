var MovementInterface = require('module/movement/movement.interface');
var SpaceCoordinates = require('module/coordinates/space');

/**
 * Orbit Movement Strategy
 * Orbiting around another celestial, at a given distance and speed.
 *
 * @param {CelestialModel} celestialModel
 * @param {number} distance
 * @param {number} speed
 * @constructor
 */
var OrbitMovementStrategy = function (celestialModel, distance, speed) {

    /**
     * Celestial object acting as movement origin
     *
     * @type {CelestialModel}
     */
    this.celestialModel = celestialModel;

    /**
     * Distance from orbit origin
     *
     * @type {number}
     */
    this.distance = distance;

    /**
     * Movement speed
     *
     * @type {number}
     */
    this.speed = speed;

    /**
     * Define ratio to apply to movement angle to respect the speed
     *
     * Angle in radians (360deg) multiplied by absolute speed divided by circumference
     * @type {number}
     */
    this.ratio = (2 * Math.PI) * Math.abs(this.speed) / (2 * Math.PI* this.distance);
};

// Inheritance to apply interface
OrbitMovementStrategy.prototype = Object.create(MovementInterface.prototype);
OrbitMovementStrategy.constructor = OrbitMovementStrategy;

/**
 * @inheritDoc
 */
OrbitMovementStrategy.prototype.getSpaceCoordinates = function (time) {

    // Define delta movement based on elapsed time
    var delta = this.ratio * this.speed * time / 1000;

    // Orbit origin coordinates
    var originSpaceCoordinates = this.celestialModel.getSpaceCoordinates();

    // Apply delta angle but keep the distance
    var x = originSpaceCoordinates.x + this.distance * Math.cos(delta);
    var y = originSpaceCoordinates.y + this.distance * Math.sin(delta);

    return new SpaceCoordinates(x, y);
};

module.exports = OrbitMovementStrategy;