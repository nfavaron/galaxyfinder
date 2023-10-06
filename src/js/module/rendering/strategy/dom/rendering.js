var RenderingStrategy = require('module/rendering/rendering.interface');
var Entity = require('module/rendering/strategy/dom/entity');

/**
 * Rendering using the DOM
 *
 * @constructor
 */
var DomRenderingStrategy = function () {

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
DomRenderingStrategy.prototype = Object.create(RenderingStrategy.prototype);
DomRenderingStrategy.constructor = DomRenderingStrategy;

/**
 * @inheritDoc
 */
DomRenderingStrategy.prototype.update = function (time) {

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
DomRenderingStrategy.prototype.register = function (model) {

    // Instantiate entity
    var entity = new Entity(model);

    // Initialize entity
    entity.initialize();

    // Inject entity
    document.getElementById('galaxyfinder').appendChild(entity.getHtmlElement());

    // Update entity
    entity.setRadius(entity.getHtmlElement().offsetWidth / 2);

    this.entities.push(entity);
    this.models.push(model);
};

/**
 * @inheritDoc
 */
DomRenderingStrategy.prototype.unregister = function (model) {

    var index = this.models.indexOf(model);

    this.entities.splice(1, index);
    this.models.splice(1, index);
};

module.exports = DomRenderingStrategy;