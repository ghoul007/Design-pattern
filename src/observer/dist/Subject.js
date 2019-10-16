"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.unregister = function (observer) {
        var index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    };
    Subject.prototype.notify = function () {
        this.observers.forEach(function (o) { return o.notify(); });
    };
    return Subject;
}());
exports.Subject = Subject;
