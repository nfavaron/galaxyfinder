var UpdatableInterface = require('module/core/updatable.interface');

/**
 * Abstract model representing life in space
 *
 * @param {string} species
 * @constructor
 */
var LifeModel = function (species) {

    /**
     * Life species (ex: human, alien, dinosaur, ...)
     *
     * @type {string}
     */
    this.species = species;
};

// Implement interface
LifeModel.prototype = Object.create(UpdatableInterface.prototype);
LifeModel.constructor = LifeModel;

/**
 * @inheritDoc
 */
LifeModel.prototype.update = function (time) {

    // Extend to implement your logic
};

module.exports = LifeModel;