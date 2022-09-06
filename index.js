// Add index.js with the three required npm packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");