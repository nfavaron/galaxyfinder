/**
 * Coordinates of a direction in space (as a unit vector)
 *
 * @param {number|undefined} x
 * @param {number|undefined} y
 * @constructor
 */
var DirectionCoordinates = function (x, y) {

    var norm = Math.max(Math.abs(x), Math.abs(y));

    // Normalize vector coordinates
    this.x = (x || 0) / norm;
    this.y = (y || 0) / norm;
};

module.exports = DirectionCoordinates;