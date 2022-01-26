const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

let prompt = () => {
  inquirer.prompt(questions).then((response) => {
    console.log(response);

    if (response.doNext === "add another employee") {
      prompt();
    } else {
      fs.writeFile("./dist/index.html", generateTeam(response), (err) =>
        err ? console.log(err) : console.log("response written to file.")
      );
    }
  });
};

let questions = [
  {
    type: "list",
    message: "What is the employee's role?",
    choices: ["manager", "engineer", "intern"],
    name: "employeeRole",
  },
  {
    type: "input",
    message: "What is the employee's name?",
    name: "employeeName",
  },
  {
    type: "input",
    message: "What is the employee's ID?",
    name: "employeeID",
  },
  {
    type: "input",
    message: "What is the employee's email address?",
    name: "employeeEmail",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "managerOffice",
    when: (data) => data.employeeRole === "manager",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub?",
    name: "engineerGitHub",
    when: (data) => data.employeeRole === "engineer",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "internSchool",
    when: (data) => data.employeeRole === "intern",
  },
  {
    type: "list",
    message: "What would you like to do next?",
    choices: ["add another employee", "finish building my team"],
    name: "doNext",
  },
];

let generateTeam = (data) => {
  return `
  test
    `;
};

prompt();
