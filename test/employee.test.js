const Employee = require('../classes/employee');

describe('getName', () => {
    it('should return the name of the employee', () => {
        const name = 'Mario';

        const employee = new Employee.getName(name);

        expect(employee.name).toBe(name)
    })
})
