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
var GenericNameSpace;
(function (GenericNameSpace) {
    var Automobile = /** @class */ (function () {
        function Automobile(name, wheels) {
            this.name = name;
            this.wheels = wheels;
        }
        Automobile.prototype.getName = function () {
            return this.name;
        };
        Automobile.prototype.getWheelCount = function () {
            return this.wheels;
        };
        return Automobile;
    }());
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name, wheels) {
            this.name = name;
            this.wheels = wheels;
        }
        Motorcycle.prototype.getName = function () {
            return this.name;
        };
        Motorcycle.prototype.getWheelCount = function () {
            return this.wheels;
        };
        return Motorcycle;
    }());
    var Chevy = /** @class */ (function (_super) {
        __extends(Chevy, _super);
        function Chevy() {
            return _super.call(this, "Chevy", { count: 4, diameter: 18 }) || this;
        }
        return Chevy;
    }(Automobile));
    var chevy = new Chevy();
    console.log("car name", chevy.getName());
    console.log("wheels ", chevy.getWheelCount());
    var motorCycle = new Motorcycle("Chevy", { count: 4, diameter: 18 });
    console.log("car name", motorCycle.getName());
    console.log("wheels ", motorCycle.getWheelCount());
})(GenericNameSpace || (GenericNameSpace = {}));
