const Manager = require('../classes/manager');


describe('getOfficeNum', () => {
    it("should return the manager's office number", () => {
        const officeNum = 11;

        const manager = new Manager('Mario', 1, 'mario@gmail.com', 11)

        expect(manager.officeNum).toBe(officeNum)
    })
});

describe('getRole', () => {
    it("should return the employees job role", () => {
        const jobRole = 'Manager';

        const manager = new Manager();

        expect(manager.role).toBe(jobRole)
    })
})