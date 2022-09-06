// Add index.js with the three required npm packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


// Creating objects with different employee types
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];

function startApp () {
    
}