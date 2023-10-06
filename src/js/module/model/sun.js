var CelestialModel = require('module/model/celestial');

/**
 * Sun Model
 *
 * @param {string} name
 * @param {number} temperature
 * @param {number} luminescence
 * @constructor
 */
var SunModel = function (name, temperature, luminescence) {

    CelestialModel.call(this, name);

    /**
     * Sun's temperature (in %)
     *
     * @type {number}
     */
    this.temperature = temperature;

    /**
     * Sun's luminescence (in %)
     *
     * @type {number}
     */
    this.luminescence = luminescence;
};

// Inheritance
SunModel.prototype = Object.create(CelestialModel.prototype);
SunModel.constructor = SunModel;

/**
 * @inheritDoc
 */
SunModel.prototype.update = function (time) {

    // TODO
};

module.exports = SunModel;