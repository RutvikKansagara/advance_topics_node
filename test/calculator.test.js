//testing with jest
// const {add,multiply} = require("../calculator.js");

// describe("A Simple Calculator", () => {
    
//     test("Addition of 2 and 3 must be 5", () => {
//         expect(add("2", "3")).toBe(5);
//     });
    
//     test("Multiplication of 5 and 4 must be 20",()=>{
//         expect(multiply("5","4")).toBe(20);
//     });
// });


//testing with mocha
// const assert = require("assert");
// const { add, multiply } = require("../calculator");
// describe("A Simple Calculator", () => {
//     it("Addition of 2 and 3 must be 5", () => {
//         assert.strictEqual(add("2", "3"), 5);
//     });
//     it("Multiplication of 5 and 4 must be 20", () => {
//         assert.strictEqual(multiply("5", "4"), 20);
//     });
// });

//testing with chai

// const expect = require("chai").expect;
// const { add, multiply } = require("../calculator");

// describe("A Simple Calculator", () => {
//     it("Addition of 2 and 3 must be 5", () => {
//         expect(add("2", "3")).to.equal(5);
//     });
//     it("Multiplication of 5 and 4 must be 20", () => {
//         expect(multiply("5", "4")).to.equal(20);
//     });
// });

//testing with ava

// const test = require("ava")
// const { add, multiply } = require("../calculator");

// test("Addition of 2 and 3 must be 5", (t) => {
//     t.is(add("2", "3"), 5);
// });
// test("Multiplication of 5 and 4 must be 20", (t) => {
//     t.is(multiply("5", "4"), 20);
// });
