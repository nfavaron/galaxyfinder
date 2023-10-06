var CelestialModel = require('module/model/celestial');

/**
 * Galaxy Model
 *
 * @param {string} name
 * @constructor
 */
var GalaxyModel = function (name) {

    CelestialModel.call(this, name);

    /**
     * List of celestials belonging to the galaxy
     *
     * @type {Array}
     */
    this.celestialModels = [];
};

// Inheritance
GalaxyModel.prototype = Object.create(CelestialModel.prototype);
GalaxyModel.constructor = GalaxyModel;

/**
 * Add a celestial to the galaxy
 *
 * @param {CelestialModel} celestialModel
 * no @returns
 */
GalaxyModel.prototype.addCelestial = function (celestialModel) {

    this.celestialModels.push(celestialModel);
};

/**
 * Remove a celestial model from the galaxy
 *
 * @param {CelestialModel} celestialModel
 * no @returns
 */
GalaxyModel.prototype.removeCelestial = function (celestialModel) {

    this.celestialModels.splice(1, this.celestialModels.indexOf(celestialModel))
};

/**
 * @inheritDoc
 */
GalaxyModel.prototype.update = function (time) {

    this
        .celestialModels
        .forEach(function (celestialModel) {

            // Get celestial movement
            var movement = celestialModel.getMovement();

            if (movement !== null) {

                // Get celestial movement coordinates
                var coordinates = movement.getSpaceCoordinates(time);

                // Update celestial position in the universe
                celestialModel.setSpaceCoordinates(coordinates);
            }

            // Update celestial state
            celestialModel.update(time);

        }.bind(this))
    ;
};

module.exports = GalaxyModel;