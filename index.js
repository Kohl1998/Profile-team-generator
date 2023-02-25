const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Empty array to hold responses from prompts
let team = []

// Manager
// Name
// Employee ID
// Email address
// Office number


const Name = {
type: 'input',
message: 'What is your name?',
name: 'Manager'
}

const employeeID = {
type: 'input',
message: 'What is your employee ID?',
name: 'ID'
}

const emailAddress = {
    type: 'email',
    message: 'What is your email address?',
    name: 'email'
}

const officeNumber = {
    type: 'number',
    message: 'What is your office number?',
    name: 'officeNum'
}

const githubUsername = {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
}

const school = {
    type: 'input',
    message: 'What school do you attend?',
    name: 'school'
}

managerFunc = () => {
    // Pushes questions from objects created above
    inquirer.prompts([Name, employeeID, emailAddress, githubUsername]).then((response) => {
        // Stores manager responses in new variable 
    const managerAnswers = new Manager(response.Name, response.employeeID, response.emailAddress, response.officeNumber)
    // Pushes data into empty data array above to be appended later
    team.push[managerAnswers]
    })
}

