var BasicObserverStrategy = require('module/observer/strategy/basic');

/**
 *
 * @returns {ObserverInterface}
 */
var ObserverFactory = function () {

    return new BasicObserverStrategy();
};

module.exports = ObserverFactory;