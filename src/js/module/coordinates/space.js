/**
 * Absolute coordinates in space
 *
 * @param {number|undefined} x
 * @param {number|undefined} y
 * @constructor
 */
var SpaceCoordinates = function (x, y) {

    this.x = x || 0;
    this.y = y || 0;
};

module.exports = SpaceCoordinates;