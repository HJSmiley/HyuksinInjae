var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined,
    });
    console.log("car ", car);
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
    // const val1 = undefined;
    // const val2 = 10;
    // const result = val1 ?? val2;
    // const result = val1 != null ? val1 : val2;
    // const count = !car ? 0
    // : !car.wheels ? 0
    // : !car.wheels.count ? 0
    // : car.wheels.count;
})(OptionalChainingNS || (OptionalChainingNS = {}));
// value = 조건1 ? statement1 : 조건2 ? statement2 : statement3;
