const food = require("../tasks/food.js");

describe("Test suite for task 4", () => {
    const min = 12;
    const max = 40;
    const foodList = [
        { kind: 'potato', price: 10 },
        { kind: 'bred', price: 16 },
        { kind: 'pepper', price: 27 },
        { kind: 'banana', price: 32 },
        { kind: 'lemon', price: 50 }
        ];
    const filteredFood = food.filterFoodPrice(foodList, min, max);
    test("Task 4.1. Verify that the expected length of the sorted array corresponds to the actual length.", () => {
        expect(filteredFood).toHaveLength(3);
    });
    test("Task 4.2. Verify that the sorted array contains the object { kind: 'pepper', price: 27 }", () => {
        expect(filteredFood).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ kind: 'pepper', price: 27 })
            ])
        );
    });
    test("Task 4.3. Verify that the sorted array contains 2, 3, and 4 elements of the original food array", () => {
        expect(filteredFood).toContainEqual(foodList[1]);
        expect(filteredFood).toContainEqual(foodList[2]);
        expect(filteredFood).toContainEqual(foodList[3]);
    });
    test("Task 4.4. Verify that the price property of the 1st element of the sorted array is greater than min", () => {
        expect(filteredFood[0].price).toBeGreaterThan(min);
    });
    test("Task 4.5. Verify that the price property of the 3rd element of the sorted array is less than max", () => {
        expect(filteredFood[2].price).toBeLessThan(max);
    });
    test("Task 4.6. Verify that the sorted array does not contain the element { kind: 'lemon', price: 50 }", () => {
        expect(filteredFood).not.toEqual(
            expect.arrayContaining([
              expect.objectContaining({ kind: 'lemon', price: 50 })
            ])
        );
    });
    test("Task 4.7. Verify that the filterFoodPrice() method with parameters provided returns something", () => {
        expect(filteredFood).toBeDefined();
    });
    test("Task 4.8. Verify that the filterFoodPrice() method with parameters provided returns some true value", () => {
        expect(filteredFood).toBeTruthy();
    });
});