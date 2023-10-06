var DomRenderingStrategy = require('module/rendering/strategy/dom/rendering');

/**
 *
 * @returns {DomRenderingStrategy}
 */
var DomRenderingStrategyFactory = function () {

    return new DomRenderingStrategy();
};

module.exports = DomRenderingStrategyFactory;