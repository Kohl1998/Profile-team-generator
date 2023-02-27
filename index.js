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

// Resuable questions for each prompt
const Name = {
type: 'input',
message: 'What is your name?',
name: 'name'
}

const employeeID = {
type: 'input',
message: 'What is your employee ID?',
name: 'id'
}

const emailAddress = {
    type: 'email',
    message: 'What is your email address?',
    name: 'email'
}

const officeNumber = {
    type: 'number',
    message: 'What is your office number?',
    name: 'officeNumber'
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
        console.log(`Welcome to the team ${response.name}`)
        // Stores manager responses in new variable 
    const managerAnswers = new Manager(response.name, response.id, response.email, response.officeNumber)
    // Pushes data into empty data array above to be appended later
    team.push(managerAnswers)
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
} else {
    // Finishes building team
    // Fixed bug by passing team array as argument
    console.log('Your team has been generated for you!')
    renderHTML(team);
}
}
)}

// Function for engineer
EngineerQuestions = () => {
    inquirer.prompt([Name, employeeID, emailAddress, githubUsername]).then((response) => {
        const engineerAnswers = new Engineer(response.name, response.id, response.email, response.github)
        console.log(`Welcome to the team ${response.name}`)
        team.push(engineerAnswers)
        // Sets intern questions straight after
        InternQuestions()
    })
}

// Function for intern
InternQuestions = () => {
    inquirer.prompt([Name, employeeID, emailAddress, school]).then((response) => {
    const internAnswers = new Intern(response.name, response.id, response.email, response.school)
    console.log(`Welcome to the team ${response.name}`)
    team.push(internAnswers)
    renderHTML(team)
    }
)}

// Initialises manager function
beginQuestions();

// Function to render objects within team array
renderHTML = () => {
    const staff = render(team)
    // To check objects within new variable
    console.log(staff)
    // added .html to render file as html doc
    writeFile("staff.html", staff)
}
// Function that actually writes data as staff.html
writeFile = (File, data) => {
    fs.writeFile(File, data, (err) => err ? console.log(err) : console.log(`Your team has been generated for you! ${File}`))
}


