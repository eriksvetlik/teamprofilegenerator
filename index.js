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

const questions = [
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

const prompt = () => {
  inquirer.prompt(questions).then((response) => {
    console.log(response);

    if (response.employeeRole === "manager") {
      const newManager = new Manager(
        response.employeeName,
        response.employeeID,
        response.employeeEmail,
        response.managerOffice
      );
      teamMembers.push(newManager);
    }

    if (response.employeeRole === "engineer") {
      const newEngineer = new Engineer(
        response.employeeName,
        response.employeeID,
        response.employeeEmail,
        response.engineerGitHub
      );
      teamMembers.push(newEngineer);
    }

    if (response.employeeRole === "intern") {
      const newIntern = new Intern(
        response.employeeName,
        response.employeeID,
        response.employeeEmail,
        response.internSchool
      );
      teamMembers.push(newIntern);
    }

    console.log(teamMembers);

    if (response.doNext === "add another employee") {
      prompt();
    } else {
      fs.writeFile("./dist/index.html", generateTeam(teamMembers), (err) =>
        err ? console.log(err) : console.log("response written to file.")
      );
    }
  });
};

let generateTeam = (teamMembers) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-5">
        <div class="container">
          <div>
            <h3>Team Profile Generator</h3>
          </div>
        </div>
      </nav>
      ${teamMembers}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
    `;
};

prompt();
