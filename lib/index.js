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
var Subject_1 = require("rxjs/Subject");
var QueueingSubject = /** @class */ (function (_super) {
    __extends(QueueingSubject, _super);
    function QueueingSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._queuedValues = [];
        return _this;
    }
    QueueingSubject.prototype.next = function (value) {
        if (this.closed || this.observers.length)
            _super.prototype.next.call(this, value);
        else
            this._queuedValues.push(value);
    };
    QueueingSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var ret = _super.prototype._subscribe.call(this, subscriber);
        if (this._queuedValues.length) {
            this._queuedValues.forEach(function (value) { return _super.prototype.next.call(_this, value); });
            this._queuedValues.splice(0);
        }
        return ret;
    };
    return QueueingSubject;
}(Subject_1.Subject));
exports.QueueingSubject = QueueingSubject;
//# sourceMappingURL=index.js.map