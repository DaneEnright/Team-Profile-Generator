const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHtml = require("./src/generateHtml");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let teamMembers = [];

function app() {
  function createManager() {
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
        createTeam();
      });
  }

  function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "what type of employee would you like to create?",
            choices: [
                "Engineer",
                "Intern",
                "I do not wish to create more employees."
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                build();
        }
    })
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engname",
          message: "What is the engineers name?",
        },
        {
          type: "input",
          name: "engid",
          message: "What is your employee id?",
        },
        {
          type: "input",
          name: "engemail",
          message: "What is your email",
        },
        {
          type: "input",
          name: "github",
          message: "What is your github account name?", 
        },
      ])

      .then((answers) => {
        const engineer = new Engineer(
          answers.engname,
          answers.engid,
          answers.engemail,
          answers.github,
        );
        teamMembers.push(engineer);
        createTeam();
      });
  }
  
  function addIntern() {
    inquirer
     .prompt([
         {
             type: "input",
             name: "intname",
             message: "What is your interns name?",
         },
         {
             type: "input",
             name: "intid",
             message: "What is your intern id?",
         },
         {
             type: "input",
             name: "intemail",
             message: "What is your email?",
         },
         {
             type: "input",
             name: "school",
             message: "What is the name of your university?",
         },
     ])
      .then((answers) => {
       const intern = new Intern(
           answers.intname,
           answers.intid,
           answers.intemail,
           answers.school
       );
       teamMembers.push(intern);
       createTeam();
      }); 
   }
   
   function build() {
       if (!fs.existsSync(OUTPUT_DIR)) {
           fs.mkdirSync(OUTPUT_DIR)
       }
       fs.writeFileSync(outputPath, generateHtml(teamMembers), "utf-8")
   }

  createManager();
}
app();

// function createTeam() 


  
 




// function init() {
    // inquirer code user will see first question
    // inquirer.prompt(questions).then((data) => {
    //   figure out how to take those responses and write them to a f
    //   writeToFile("index.html", generateHtml(data));
    // });
//   }
// 
// init();
// 
// function generateHtml() {}
