"use strict";
exports.__esModule = true;
var declare = require("dojo/_base/declare");
/**
 * A decorator that converts a TypeScript class into a declare constructor.
 * This allows declare constructors to be defined as classes, which nicely
 * hides away the `declare([], {})` boilerplate.
 */
function default_1() {
    var mixins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mixins[_i] = arguments[_i];
    }
    return function (target) {
        return declare(mixins, target.prototype);
    };
}
exports["default"] = default_1;
