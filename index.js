const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');
const Employee = require('./classes/employee');


let teamMembers = [];



function startQuestion() {
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
     

        const teamMember = new Manager (name, id, email, officeNum);

        teamMembers.push(teamMember)

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
    ];

    inquirer.prompt(engineerQuestions)
    
    .then((answer) => {
        const name = answer.engineerName;
        const id = answer.engineerId;
        const email = answer.engineerEmail;
        const github = answer.engineerGitHub;

        const teamMember = new Engineer(name, id, email, github);

        teamMembers.push(teamMember);

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
    ];

    inquirer.prompt(internQuestions)

    .then((answer) => {
        const name = answer.internName;
        const id = answer.internId;
        const email = answer.internEmail
        const school = answer.internSchool;

        const teamMember = new Intern(name, id, email, school);

        teamMembers.push(teamMember);
        chooseTeamMember();
    });


}; // WORKS !!!!!!!!!!!!!1




function makeTeam(){

    console.log(teamMembers)
    
    // create an array that stores the total HTML page

    const totalHTML = [];

    // create a beginning HTML variable that stores basic beginning HTML layout 
        // push beginning HTML layout to the total HTML array 

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

        totalHTML.push(startHTML); // WORKS !!!!!!!!!!!!



        teamMembers.forEach((member) => {

            let memberHTML = `
                <div class="col" id="card-body">
                <h1>${member.name}</h1>
                <h2>${member.role}</h2>
                    <div id="info" style="border-style: solid;">
                        <p> <strong>ID:</strong> ${member.id}</p>
                        <strong>Email: </strong><a href="${member.email}"> ${member.email}</a><br>
                    `

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

            teamMembers += `
                </div>
            </div>`

            totalHTML.push(memberHTML);

            console.log(totalHTML)

        })

    const endHTML = `
                </div>
            </body>
            </html>`

    totalHTML.push(endHTML);

  

    fs.writeFile('teamProfile.html', totalHTML.join(''), (err) => 
    err ? console.log(err) : console.log('success!'))

}


startQuestion();




