const Engineer = require('../classes/engineer');

describe('getGithub', () => {
    it("should return the engineer's github username", () => {
        const gitHub = 'Mario12'

        const engineer = new Engineer('Mario', 1, 'mario@gmail.com', 'Mario12')

        expect(engineer.github).toBe(gitHub)
    })
});

describe('getRole', () => {
    it("should return the employees job role", () => {
        const jobRole = 'Engineer';

        const engineer = new Engineer();

        expect(engineer.role).toBe(jobRole)
    })
})