const tasks = require("../tasks/tasks");

describe("Test suite for task 1 and 2", () => {
    const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2' ];
    const listSize = userList.length;
    test("Task 1. Addition of two numbers", () => {
        expect(tasks.add(0.1, 0.2)).toBe(0.3);
    });
    test("Task 2. Verify user list", () => {
        expect(userList).toContain("admin");
        expect(userList[0]).toStrictEqual("Nick");
        expect(userList[listSize - 1]).toStrictEqual("new_user_2");
        expect(userList).toHaveLength(5);
        expect(typeof userList[2]).toBe("string");
        expect(userList[7]).toBeUndefined();
    });
});