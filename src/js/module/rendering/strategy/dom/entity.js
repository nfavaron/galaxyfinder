var EntityInterface = require('module/rendering/entity.interface');

/**
 * Entity representing a @model as a 3D object
 *
 * @param {CelestialModel} model
 * @constructor
 */
var Entity = function (model) {

    /**
     * DOM Element representing the entity
     *
     * @type {Element|null}
     */
    this.htmlElement = null;

    /**
     * Model represented by the entity
     *
     * @type {CelestialModel}
     */
    this.model = model;

    /**
     * Celestial radius to find center of gravity
     *
     * @type {number}
     */
    this.radius = 0;
};

// Implement interface
Entity.prototype = Object.create(EntityInterface.prototype);
Entity.constructor = Entity;

/**
 * @inheritDoc
 */
Entity.prototype.initialize = function () {

    // Create element
    this.htmlElement = document.createElement('div');
    this.htmlElement.classList.add('celestial');
    this.htmlElement.classList.add(this.model.name);
};

/**
 * @inheritDoc
 */
Entity.prototype.update = function (time) {

    var coordinates = this.model.getSpaceCoordinates();

    if (!!coordinates) {

        this.htmlElement.style.left = (coordinates.x - this.radius) + 'px';
        this.htmlElement.style.top = (coordinates.y - this.radius) + 'px';
    }
};

/**
 * Get the HTML element
 *
 * @returns {Element}
 */
Entity.prototype.getHtmlElement = function () {

    return this.htmlElement;
};

/**
 * Set the radius value
 *
 * @param {number} radius
 * no @returns
 */
Entity.prototype.setRadius = function (radius) {

    this.radius = radius;
};

module.exports = Entity;