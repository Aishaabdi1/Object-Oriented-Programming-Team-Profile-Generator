// Add index.js with the three required npm packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");



// Creating objects with different employee types
const Manager = require("./library/Manager.js");
const Engineer = require("./library/Engineer.js");
const Intern = require("./library/Intern.js");

//output directory for generated team file
const OUTPUT_DIR = path.resolve(__dirname, "example");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const generateTeam = require("./src/template.js")

teamArray = [];

// starts the application in the command line; prompts user for employee type details
function startApp () {
    function createTeam () {
        inquirer.prompt([{
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: ["Manager", "Engineer", "Intern", "No additional team members are needed."]
        }]).then(function (userInput) {
          switch(userInput.addEmployeePrompt) {
            case "Manager":
              creatNewManager();
              break;
            case "Engineer":
              createNewEngineer();
              break;
            case "Intern":
              createNewIntern();
              break;
    
            default:
              htmlBuilder();
          }
        })
      }


// starts the application in the command line; prompts the user for manager details 



function creatNewManager() {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?"
        },
    
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID number?"
        },
    
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?"
        },
    
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?"
        }
    
      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
      });
    
}
 //prompts to create new engineer
function createNewEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  //prompts to create ne intern
  function createNewIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  // Requests that the user enter the details of another employee. Will either run prompts for the selected employee type or render HTML and terminate the application.
  function htmlBuilder () {
    console.log("Team created!")
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
}

createTeam();
}
// This function will initate the application.
startApp();