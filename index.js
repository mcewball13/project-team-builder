const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeQuestions = [
    {
        type: "rawlist",
        name: "role",
        message: "What type of Employee would you like to add if any?",
        choices: ["Intern", "Engineer", "Manager", "none"],
        // validation: titleInput => titleInput ? true : false
    },
    {
        type: "input",
        name: "name",
        message: "What is your employees name?",
        // validation: titleInput => titleInput ? true : false
    },
    {
        type: "input",
        name: "id",
        message: "What is your employees ID?",
        // validation: descriptionInput => descriptionInput ? true : false
    },
    {
        type: "input",
        name: "email",
        message: "What is your Employeeys Email?",
        // validation: descriptionInput => descriptionInput ? true : false
    },
    {
        type: "input",
        name: "school",
        message: "What school did you attend?",
        when: (answers) => answers.role === "Intern",
        // validation: titleInput => titleInput ? true : false
    },
    {
        type: "input",
        name: "github",
        message: "What is your github user name?",
        when: (answers) => answers.role === "Engineer",
        // validation: titleInput => titleInput ? true : false
    },
];

const employeeArr = [];


// Add to a new file in the dist folder

const managerArr = employeeArr.filter(
    (employee) => employee.getRole() === "Manager"
);
const engineerArr = employeeArr.filter(
    (employee) => employee.getRole() === "Engineer"
);
const internArr = employeeArr.filter(
    (employee) => employee.getRole() === "Intern"
);

managerArr.map((manager) => {
    return `<div class="card">${manager.getName()}`;
});
internArr.map((intern) => {
    return `<div class="card">${intern.getName()}`;
});
engineerArr.map((engineer) => {
    return `<div class="card">${engineer.getName()}`;
});

function init() {
    inquirer.prompt(employeeQuestions).then((answers) => {
        if (answers.role === "Intern") {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            console.log(intern);
            employeeArr.push(intern);
        } else if (answers.role === "Engineer") {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            console.log(engineer, engineer.getRole());
            employeeArr.push(engineer);
        } else if (answers.role === "Manager") {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            console.log(manager);
            employeeArr.push(manager);
        }
    });
}
init();
