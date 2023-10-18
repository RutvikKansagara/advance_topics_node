const { add, multiply } = require("../calculator");

describe("A Simple Calculator", () => {
    it("Addition of 2 and 3 must be 5", () => {
        expect(add("2", "3")).toEqual(5);
    });
    it("Multiplication of 5 and 4 must be 20", () => {
        expect(multiply("5", "4")).toEqual(20);
    });
});
