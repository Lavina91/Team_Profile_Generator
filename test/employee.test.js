const Employee = require('../classes/employee');

describe('getName', () => {
    it('should return the name of the employee', () => {
        const name = 'Mario';

        const employee = new Employee(name);

        expect(employee.name).toBe(name)
    })
});

describe('getId', () => {
    it('should return the id of the employee', () => {
        const id = 1;

        const employee = new Employee('Mario', 1);

        expect(employee.id).toBe(id);
    })
})

describe('getEmail', () => {
    it("should return the employee's email", () => {
        const email = 'mario@gmail.com'

        const employee = new Employee('Mario', 1, 'mario@gmail.com');

        expect(employee.getEmail(email)).toBe(email);
    })
})
