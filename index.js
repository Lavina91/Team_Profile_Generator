const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');
const Employee = require('./classes/employee');


let teamMembers = [];



function startQuestions() {
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
            name: 'managerOffice'
        }
    ]

    inquirer.prompt(startQuestions)
// inquirer prompt the startQuestions
    .then((answer) => {

        const name = answer.managerName;
        const id = answer.managerId;
        const email = answer.managerEmail;
        const officeNum = answer.managerOffice

        const managerMember = new Manager (name, id, email, officeNum);

        teamMembers.push(managerMember)

        chooseTeamMember();


    });



}; // WORKS !!!!



function chooseTeamMember(){

    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of role would you like to add ?',
            choices: ['Engineer', 'Intern', 'I do not want add any more team members'],
            name: 'roles'
        }   
    ])
    .then((answer) => {

        switch(answer.roles) {

            case 'Engineer':
                addEngineer();
                break;

            case 'Intern':
                addIntern();
                break;

            case 'I do not want add any more team members':
                makeTeam();
                break;
        }
    })

} // WORKS !!!!!!!!



function addEngineer(){
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
            type: 'input',
            message: 'What is your GitHub username ?',
            name: 'engineerGitHub'
        }
    ]

    inquirer.prompt(engineerQuestions)
    
    .then((answer) => {

        const name = answer.engineerName;
        const id = answer.engineerId;
        const email = answer.engineerEmail;
        const github = answer.engineerGitHub;

        const engineerMember = new Engineer(name, id, email, github);

        teamMembers.push(engineerMember);

        chooseTeamMember();
    });
}; // WORKS !!!!!!!!




function addIntern(){
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
            name: 'internEmail'
        },
        {
            type: 'input',
            message: "What is the name of your intern's school ?",
            name: 'internSchool'
        }
    ]

    inquirer.prompt(internQuestions)

    .then((answer) => {

        const name = answer.internName;
        const id = answer.internId;
        const email = answer.internEmail
        const school = answer.internSchool;

        const internMember = new Intern(name, id, email, school);

        teamMembers.push(internMember);
        console.log(teamMembers);
        chooseTeamMember();
    });


}; // WORKS !!!!!!!!!!!!!1




function makeTeam(){
    
    // create an array that stores the total HTML page

    // create a beginning HTML variable that stores basic beginning HTML layout 
        // push beginning HTML layout to the total HTML array 

    // create a for loop that loops through the length of teamMembers to add card bodys depending on roles
        // create a variable to store middle HTML layout 

        // IF role = Manager 
        // ADD office number

        // IF role = Engineer 
        // ADD github username

        //IF role = Intern 
         // ADD school name 

        // push middle HTML variable to total HTML array

    // create an ending HTML variable that has ending HTML layout
        // push to total HTML array 
        
    // call fs.writefile to create HTML file for the team
}








