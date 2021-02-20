const Intern = require('../classes/intern');


describe('getSchool', () => {
    it("should return the name of the intern's school", () => {
        const schoolName = 'Denver University'

        const intern = new Intern('Mario', 1, 'mario@gmail.com', 'Denver University')

        expect(intern.school).toBe(schoolName)
    })
})

describe('getRole', () => {
    it("should return the employees job role", () => {
        const jobRole = 'Intern';

        const intern = new Intern();

        expect(intern.role).toBe(jobRole)
    })
})