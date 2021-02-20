// calling in packages needed to make application function
const inquirer = require('inquirer');
const fs = require('fs');

// linking my index.js to all my classes files
const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');
const Employee = require('./classes/employee');

// array to store all team members for team profile
let teamMembers = [];



function startQuestion() {
    // variable to store all of the manager questions 
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

// prompting the user with the manager questions 
    inquirer.prompt(startQuestions)

    .then((answer) => {
        // storing all the different inputs into variables 
        const name = answer.managerName;
        const id = answer.managerId;
        const email = answer.managerEmail;
        const officeNum = answer.managerOffice
     
        // creating a new Manager object based off user input 
        const teamMember = new Manager (name, id, email, officeNum);
        
        // pushing the new Manager object to the teamMembers array
        teamMembers.push(teamMember)

        // calling the chooseTeamMember function 
        chooseTeamMember();


    });



}; 



function chooseTeamMember(){

    // prompting the user to choose what role they want to add to the team profile
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of role would you like to add ?',
            choices: ['Engineer', 'Intern', 'I do not want add any more team members'],
            name: 'roles'
        }   
    ])
    .then((answer) => {

        
        // using a switch statement to call a function depending on user input
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

} 



function addEngineer(){

    // variable to store all of the engineer questions
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
    ];

    inquirer.prompt(engineerQuestions)
    
    .then((answer) => {

        // storing all of the user inputs into variables
        const name = answer.engineerName;
        const id = answer.engineerId;
        const email = answer.engineerEmail;
        const github = answer.engineerGitHub;

        // creating a new Engineer object based off user input 
        const teamMember = new Engineer(name, id, email, github);

        // pushing new Engineer object into teamMembers array 
        teamMembers.push(teamMember);

        // calling the chooseTeamMember function
        chooseTeamMember();
    });
}; 




function addIntern(){
    // variable to store all of the intern questions 
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
    ];

    inquirer.prompt(internQuestions)

    .then((answer) => {
        // storing all the user inputs into variables 
        const name = answer.internName;
        const id = answer.internId;
        const email = answer.internEmail
        const school = answer.internSchool;

        // creating a new Intern object based off user input 
        const teamMember = new Intern(name, id, email, school);

        // pushing new Intern object to the teamMembers array 
        teamMembers.push(teamMember);

        // calling the chooseTeamMember function 
        chooseTeamMember();
    });


}; 




function makeTeam(){
    // an array to store all of the team profile HTML content 
    const totalHTML = [];

    // variable that creates the beginning of the team profile HTML content
    const startHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>
</head>
<body id="body">

<nav class="navbar sticky-top navbar-light" id="navBar">
    <div class="container-fluid">
        <a class="navbar-brand" id="sticky-top" href="#">Team Profile</a>
    </div>
</nav>



    <div class="container">
        <div class="row">`;

    // pushes the start HTML content to the totalHTML array
        totalHTML.push(startHTML); 


        // forEach function to loop through all of the teamMembers array
        teamMembers.forEach((member) => {

            // all teamMembers will have this HTML content and will displayed according to their name, role, id and email 
            let memberHTML = `
                <div class="col" id="card-body">
                <h1>${member.name}</h1>
                <h2>${member.role}</h2>
                    <div id="info" style="border-style: solid;">
                        <p> <strong>ID:</strong> ${member.id}</p>
                        <strong>Email: </strong><a href="${member.email}"> ${member.email}</a><br>
                    `

            // if statement to check team member role, And assign additional HTML content according to their role
            if (member.role === 'Manager') {
                memberHTML += `
             <p> <strong>Office Number:</strong> ${member.officeNum} </p>
             </div>
             </div>`
            }

            else if (member.role === 'Engineer') {
                memberHTML += `
             <strong>GitHub: </strong> <a href="https://github.com/${member.github}">${member.github}</a>
             </div>
             </div>`
            }

            else if (member.role === 'Intern') {
                memberHTML += `
             <p> <strong>School:</strong> ${member.school}</p>
             </div>
             </div>`
            }

            // adding the last 2 closing divs to each team member 
            memberHTML += `
                </div>
            </div>`

            // pushes each team member's HTML content to the totalHTML array
            totalHTML.push(memberHTML);

         

        })

    // variable to store the ending of the HTML page     
    const endHTML = `
                </div>
            </body>
            </html>`
    
    // pushes the ending HTML content to totalHTML array 
    totalHTML.push(endHTML);

  
// creates a file named 'teamProfile.html' with the totalHTML array content joined together 
    fs.writeFile('teamProfile.html', totalHTML.join(''), (err) => 
    // if there is an error , console log error 
    // else console log success!
    err ? console.log(err) : console.log('success!'))

}

// starts off the application 
startQuestion();
