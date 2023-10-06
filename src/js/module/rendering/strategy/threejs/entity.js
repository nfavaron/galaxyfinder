var EntityInterface = require('module/rendering/entity.interface');

/**
 * Entity representing a @model as a 3D object
 *
 * @param {CelestialModel} model
 * @constructor
 */
var Entity = function (model) {

    this.object3d = null; // TODO: new Object3D();

    /**
     * Model represented by the entity
     *
     * @type {CelestialModel}
     */
    this.model = model;
};

// Implement interface
Entity.prototype = Object.create(EntityInterface.prototype);
Entity.constructor = Entity;

/**
 * @inheritDoc
 */
Entity.prototype.initialize = function () {

    // Extend to implement your logic

};

/**
 * @inheritDoc
 */
Entity.prototype.update = function (time) {

    // Extend to implement your logic

};

module.exports = Entity;