const Inquirer = require('inquirer');

const Employee = require('./classes/employee');
const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');
const inquirer = require('inquirer');


const startQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name ?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the team manager's ID number ?",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is the team manager's email ?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number ?",
        name : 'managerOffice'
    },
    {
        type: 'list',
        message: 'What type of role would you like to add ?',
        choices: ['Engineer', 'Intern', 'I do not want add any more team members'],
        name: 'roles'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name ?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is the engineer's ID number ?",
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "What is the engineer's email ?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username ?",
        name: 'engineerGitHub'
    },
    {
        type: 'list',
        message: 'What type of role would you like to add ?',
        choices: ['Engineer', 'Intern', 'I do not want add any more team members'],
        name: 'roles'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name ?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is the intern's ID number ?",
        name: 'internId'
    },
    {
        type: 'input',
        message: "What is the intern's email ?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the name of your intern's school ?",
        name: 'internSchool'
    },
    {
        type: 'list',
        message: 'What type of role would you like to add ?',
        choices: ['Engineer', 'Intern', 'I do not want add any more team members'],
        name: 'roles'
    }
]

inquirer.prompt(startQuestions)

.then((res) => console.log(res))

.then(() => inquirer.prompt(engineerQuestions))

.then((res) => console.log(res))

.then (() => inquirer.prompt(internQuestions))

.then((res) => console.log(res));



