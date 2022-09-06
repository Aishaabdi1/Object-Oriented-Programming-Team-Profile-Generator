class Intern extends Employee {
    constructor(name, id, email, school) {
        //call parent constructor here:
        super(name, id, email);
    }

    getSchool() {
        return "Birmingham";
    }

}




module.exports = Intern;