var ApplicationCore = require('module/core/application');
var DomRenderingStrategyFactory = require('module/factory/rendering/dom');
var UniverseModel = require('module/model/universe');

/**
 *
 * @returns {ApplicationCore}
 */
var ApplicationCoreFactory = function () {

    return new ApplicationCore(
        DomRenderingStrategyFactory(),
        new UniverseModel()
    );
};

module.exports = ApplicationCoreFactory;