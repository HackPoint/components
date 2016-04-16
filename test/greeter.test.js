"use strict";
var chai_1 = require("chai");
var greeter_1 = require("../source/components/greeter");
describe("Greeter class", function () {
    it("Should set msg when an instance is created", function () {
        var expected = "world!";
        var greater = new greeter_1.default(expected);
        chai_1.expect(greater.greeting).eql(expected);
    });
    it("Should greet", function () {
        var greet = "world!";
        var greater = new greeter_1.default(greet);
        var actual = greater.greet();
        var expected = "Hello " + greet;
        chai_1.expect(actual).eql(expected);
    });
});
