var CelestialModel = require('module/model/celestial');

/**
 * Planet Model
 *
 * @param {string} name
 * @constructor
 */
var PlanetModel = function (name) {

    CelestialModel.call(this, name);

    /**
     * Life evolving on the planet (if any)
     *
     * @type {LifeModel|null}
     */
    this.lifeModel = null;
};

// Inheritance
PlanetModel.prototype = Object.create(CelestialModel.prototype);
PlanetModel.constructor = PlanetModel;

/**
 * @inheritDoc
 */
PlanetModel.prototype.update = function (time) {

    // TODO
};

/**
 * Set the life evolving on the planet
 *
 * @param {LifeModel|null} lifeModel
 * no @returns
 */
PlanetModel.prototype.setLife = function (lifeModel) {

    this.lifeModel = lifeModel;
};

/**
 * Get the life evolving on the planet
 *
 * @returns {LifeModel|null}
 */
PlanetModel.prototype.getLife = function () {

    return this.lifeModel;
};

module.exports = PlanetModel;