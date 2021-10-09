// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const e = new HtmlElement();
// e.click() and e.focus();
// Then, create "HtmlSelectElement" with items(optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.
var Focus = /** @class */ (function () {
    function Focus() {
    }
    Focus.prototype.focus = function () {
        console.log('focus', this);
    };
    return Focus;
}());
var TsHtmlElement = /** @class */ (function (_super) {
    __extends(TsHtmlElement, _super);
    function TsHtmlElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TsHtmlElement.prototype.click = function () {
        console.log('click', this);
    };
    return TsHtmlElement;
}(Focus));
var tsE = new TsHtmlElement();
console.log('%c\n*** TYPESCRIPT CLASSES ***\n', 'color: tomato');
tsE.click();
tsE.focus();
var TsHtmlSelectElement = /** @class */ (function (_super) {
    __extends(TsHtmlSelectElement, _super);
    function TsHtmlSelectElement(items) {
        var _this = _super.call(this) || this;
        if (!items) {
            _this.items = [];
        }
        else if (Array.isArray(items)) {
            _this.items = items;
        }
        else {
            _this.items = [items];
        }
        return _this;
    }
    TsHtmlSelectElement.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // 'removeItem' will not work with objects and NaN in array
    // more complex check is needed
    TsHtmlSelectElement.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (el) { return el !== item; });
    };
    return TsHtmlSelectElement;
}(TsHtmlElement));
var tsS1 = new TsHtmlSelectElement([1, 2, 3]);
var tsS2 = new TsHtmlSelectElement();
console.log(tsS1.items);
console.log(tsS2.items);
tsS2.addItem(4);
tsS2.addItem(5);
tsS2.addItem(6);
console.log(tsS2.items);
tsS2.removeItem(5);
console.log(tsS2.items);
tsS2.click();
tsS2.focus();
console.log({ TsHtmlElement: TsHtmlElement });
console.log({ TsHtmlSelectElement: TsHtmlSelectElement });
console.log(TsHtmlElement.prototype.constructor === TsHtmlElement);
console.log(TsHtmlSelectElement.prototype.constructor === TsHtmlSelectElement);
//# sourceMappingURL=ts_classes.js.map