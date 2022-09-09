const Employee = require("./Employee");


class Engineer extends Employee {
    // call parent constructor
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    // returns the github of the engineer
    getGithub() {
        return this.github;
    }

    // returns the role of the engineer

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;
