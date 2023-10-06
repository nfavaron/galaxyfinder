var ObserverInterface = require('module/observer/observer.interface');

/**
 * @inheritDoc
 */
var BasicObserverStrategy = function () {

    /**
     * @type {Object}
     */
    this.observers = {};
};

// Inheritance
BasicObserverStrategy.prototype = Object.create(ObserverInterface.prototype);
BasicObserverStrategy.constructor = BasicObserverStrategy;

/**
 * @inheritDoc
 */
BasicObserverStrategy.prototype.on = function (eventName, callbackFunction) {

    // No observers for this event name
    if (!this.observers[eventName]) {

        this.observers[eventName] = [];
    }

    // Register observer
    this.observers[eventName].push(callbackFunction);
};

/**
 * @inheritDoc
 */
BasicObserverStrategy.prototype.off = function (eventName, callbackFunction) {

    // Has observers for this event name
    if (!!this.observers[eventName]) {

        // No callback
        if (callbackFunction === undefined) {

            // Remove all observers for this event name
            this.observers[eventName] = [];
        } else {

            // Remove specific observer
            var index = this.observers[eventName].indexOf(callbackFunction);

            if (index > -1) {

                this.observers[eventName].splice(index, 1);
            }
        }
    }
};

/**
 * @inheritDoc
 */
BasicObserverStrategy.prototype.trigger = function (eventName, data) {

    // Has observers for this event name
    if (!!this.observers[eventName]) {

        // For each register observer
        this.observers[eventName].forEach(function (callbackFunction) {

            // Call the callback function
            callbackFunction(data);
        });
    }
};

module.exports = BasicObserverStrategy;