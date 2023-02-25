const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const internal = require("stream");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Empty array to hold responses from prompts
let team = []

// Manager
// Name
// Employee ID
// Email address
// Office number

beginQuestions = () => {
    managerFunc();
}


const Name = {
type: 'input',
message: 'What is your name?',
name: 'name'
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

const roles = ['Engineer', 'Intern', 'Finish building the team']

// Further options for user to explore
const menu = {
    type: 'list',
    message: 'What role would you like to add to the team?',
    choices: roles,
    name: 'role'
}

// Manager function to inititalise first set of questions
managerFunc = () => {
    // Pushes questions from objects created above
    inquirer.prompt([Name, employeeID, emailAddress, officeNumber]).then((response) => {
        // Stores manager responses in new variable 
    const managerAnswers = new Manager(response.Name, response.employeeID, response.emailAddress, response.officeNum)
    // Pushes data into empty data array above to be appended later
    team.push[managerAnswers]
    // To open menu after all prompts are completed
    menuQ()
    })
}

// Menu function 

menuQ = () => {
inquirer.prompt([menu]).then((response) => {
if (response.role === 'Engineer') {
    EngineerQuestions()
} else if (response.role === 'Intern') {
    InternQuestions()
} else if (response.role === 'Finish building the team') {
    finishBuilding()
}
}
)}

// Function for engineer
EngineerQuestions = () => {
    inquirer.prompt([Name, employeeID, emailAddress, githubUsername]).then((response) => {
        const engineerAnswers = new Engineer(response.name, response.ID, response.email, response.githubUsername)
        team.push[engineerAnswers]
    })

}

// Function for intern
InternQuestions = () => {
    inquirer.prompt([Name, employeeID, emailAddress, school]).then((response) => {
    const internAnswers = new Intern(response.name, response.ID, response.email, response.school)
    team.push(internAnswers)
    }
)}

beginQuestions();