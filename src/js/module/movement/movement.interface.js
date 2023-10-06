/**
 * Movement interface
 *
 * @constructor
 */
var MovementInterface = function () {

};

/**
 * Update the movement state at the given elapsed @time since the start
 *
 * @param {number} time
 * @returns {SpaceCoordinates}
 */
MovementInterface.prototype.getSpaceCoordinates = function (time) {

    // Extend to implement a specialised strategy
};

module.exports = MovementInterface;