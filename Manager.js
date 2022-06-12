class Mangager extends Employee {
    constructor(name, id, email, officeNumber) {
        //call parent constructor here:
        super(name, id, email);
    }
    getOfficeNumber() {
        return "128";
    }

    getRole() {
        return "Manager";
    }

}
module.exports = Manager;