var UpdatableInterface = require('module/core/updatable.interface');

/**
 * Universe Model
 *
 * @constructor
 */
var UniverseModel = function () {

    /**
     * List of galaxies
     *
     * @type {Array}
     */
    this.galaxyModels = [];
};

// Implement interface
UniverseModel.prototype = Object.create(UpdatableInterface.prototype);
UniverseModel.constructor = UniverseModel;

/**
 * Add a galaxy to the universe
 *
 * @param {GalaxyModel} galaxyModel
 * no @returns
 */
UniverseModel.prototype.addGalaxy = function (galaxyModel) {

    this.galaxyModels.push(galaxyModel);
};

/**
 * Remove a galaxy model from the universe
 *
 * @param {GalaxyModel} galaxyModel
 * no @returns
 */
UniverseModel.prototype.removeGalaxy = function (galaxyModel) {

    this.galaxyModels.splice(1, this.galaxyModels.indexOf(galaxyModel));
};

/**
 * @inheritDoc
 */
UniverseModel.prototype.update = function (time) {

    this
        .galaxyModels
        .forEach(function (galaxyModel) {

            // Get galaxy movement
            var movement = galaxyModel.getMovement();

            if (movement !== null) {

                // Get galaxy movement coordinates
                var coordinates = movement.getSpaceCoordinates(time);

                // Update galaxy position in the universe
                galaxyModel.setSpaceCoordinates(coordinates);
            }

            // Update galaxy state
            galaxyModel.update(time);

        }.bind(this))
    ;
};

module.exports = UniverseModel;