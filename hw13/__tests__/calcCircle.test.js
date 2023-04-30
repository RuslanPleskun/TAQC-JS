const calcCircle = require("../tasks/calcCircle.js");

describe("Test suite for task 3", () => {
    test("Task 3.1. Verify circle length", () => {
        expect(calcCircle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    });
    test("Task 3.2. Verify circle area", () => {
        expect(calcCircle.getCircleArea(9)).toBeCloseTo(254.47, 2);
    });
    test("Task 3.3. Verify both functions with no arguments passed", () => {
        expect(calcCircle.getCircleLength()).toBeDefined();
        expect(calcCircle.getCircleArea()).toBeDefined();
    });
});