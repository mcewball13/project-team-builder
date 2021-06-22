const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const templateMaker = require('./src/template')

const employeeQuestions = [
    {
        type: "rawlist",
        name: "role",
        message: "What type of Employee would you like to add if any?",
        choices: ["Intern", "Engineer", "Manager", "none"],
        
    },
    {
        type: "input",
        name: "name",
        message: "What is your employees name?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a name!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "id",
        message: "What is your employees ID?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter an ID!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "What is your Employeeys Email?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter an email!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "school",
        message: "What school did you attend?",
        when: (answers) => answers.role === "Intern",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a school name!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "github",
        message: "What is your github user name?",
        when: (answers) => answers.role === "Engineer",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter your github user!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        when: (answers) => answers.role === "Manager",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("Please enter an office number!");
                return false;
            }
        },
    },
    {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?",
    },
];

const employeeArr = [];

function init() {
    inquirer.prompt(employeeQuestions).then((answers) => {
        if (answers.role === "Intern") {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            // console.log(intern);
            employeeArr.push(intern);
        } else if (answers.role === "Engineer") {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            // console.log(engineer, engineer.getRole());
            employeeArr.push(engineer);
        } else if (answers.role === "Manager") {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            // console.log(manager);
            employeeArr.push(manager);
        }
        if (answers.addAnother) {
            return init();
        }
        console.log(employeeArr);

    }).then(
        templateMaker(employeeArr)
    );
}
init();
