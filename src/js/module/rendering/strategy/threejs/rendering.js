var RenderingStrategy = require('module/rendering/rendering.interface');
var Entity = require('module/rendering/strategy/threejs/entity');

/**
 * Rendering using ThreeJS library
 *
 * @constructor
 */
var ThreejsRenderingStrategy = function () {

    /**
     * @type {Array<Entity>}
     */
    this.entities = [];

    /**
     * @type {Array<UpdatableInterface>}
     */
    this.models = [];
};

// Inheritance
ThreejsRenderingStrategy.prototype = Object.create(RenderingStrategy.prototype);
ThreejsRenderingStrategy.constructor = ThreejsRenderingStrategy;

/**
 * @inheritDoc
 */
ThreejsRenderingStrategy.prototype.update = function (time) {

    this
        .entities
        .forEach(function (entity) {

            entity.update(time);
        }.bind(this))
    ;
};

/**
 * @inheritDoc
 */
ThreejsRenderingStrategy.prototype.register = function (model) {

    var entity = new Entity(model);

    // TODO: call entity factory depending on model instance

    this.entities.push(entity);

    this.models.push(model);
};

/**
 * @inheritDoc
 */
ThreejsRenderingStrategy.prototype.unregister = function (model) {

    var index = this.models.indexOf(model);

    this.entities.splice(1, index);
    this.models.splice(1, index);
};

module.exports = ThreejsRenderingStrategy;