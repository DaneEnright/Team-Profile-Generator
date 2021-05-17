const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHtml = require("./generateHtml");
const Manager = require("./library/manager");

let teamMembers = [];

function app() {
  function createManager(params) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your team manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is your employee id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your Office Phone Number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamMembers.push(manager);
      });
  }

  createManager();
}
app();

function createTeam() {}

function addEngineer() {}

function addIntern() {}

function generateHtml() {}
