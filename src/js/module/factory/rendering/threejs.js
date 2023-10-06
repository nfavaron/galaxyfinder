var ThreejsRenderingStrategy = require('module/rendering/strategy/threejs/rendering');

/**
 *
 * @returns {ThreejsRenderingStrategy}
 */
var ThreejsRenderingStrategyFactory = function () {

    return new ThreejsRenderingStrategy();
};

module.exports = ThreejsRenderingStrategyFactory;