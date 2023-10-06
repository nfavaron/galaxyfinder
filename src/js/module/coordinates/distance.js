/**
 * Coordinates of a distance from the origin
 *
 * @param {number|undefined} x
 * @param {number|undefined} y
 * @constructor
 */
var DistanceCoordinates = function (x, y) {

    this.x = x || 0;
    this.y = y || 0;
};

module.exports = DistanceCoordinates;