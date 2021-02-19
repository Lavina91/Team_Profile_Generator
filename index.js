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

        // chooseTeamMember();


    })



}; 

startQuestions();

// {
//     type: 'list',
//         message: 'What type of role would you like to add ?',
//             choices: ['Engineer', 'Intern', 'I do not want add any more team members'],
//                 name: 'roles'
// }

function chooseTeamMember(){

    // make a switch statement 

// IF user wants to add an Intern 
//call makeIntern function that ask intern questions

//ELSE  user wants to add an Engineer 
// call makeEngineer function that ask engineer questions 

// ELSE user is done making their team 
// call makeTeam function that add html file with all the answers from user 

}




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
            type: 'list',
            message: 'What type of role would you like to add ?',
            choices: ['Engineer', 'Intern', 'I do not want add any more team members'],
            name: 'roles'
        }
    ]

// inquirer prompt the Engineer questions

// .then save the data using
// const name = this.name

// then push new Engineer object to let teamMembers


};




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

// inquirer prompt the Intern questions

// .then save the data using
// const name = this.name

// then push new Intern object to let teamMembers

};



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








