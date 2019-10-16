"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExampelObserver = /** @class */ (function () {
    function ExampelObserver(name) {
        this.name = name;
    }
    ExampelObserver.prototype.notify = function () {
        console.log("Obsever said: " + this.name);
    };
    return ExampelObserver;
}());
exports.ExampelObserver = ExampelObserver;
