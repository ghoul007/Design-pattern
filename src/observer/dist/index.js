"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observer_1 = require("./Observer");
var Subject_1 = require("./Subject");
var testSub = /** @class */ (function (_super) {
    __extends(testSub, _super);
    function testSub() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.movies = [];
        return _this;
    }
    testSub.prototype.addMovie = function (movie) {
        this.movies.push(movie);
        this.notify();
    };
    return testSub;
}(Subject_1.Subject));
new (/** @class */ (function () {
    function Main() {
        var testSubject = new testSub();
        var obs1 = new Observer_1.ExampelObserver("ahmed");
        var obs2 = new Observer_1.ExampelObserver("ghoul");
        testSubject.register(obs1);
        testSubject.register(obs2);
        testSubject.addMovie("ghoul");
    }
    return Main;
}()))();
