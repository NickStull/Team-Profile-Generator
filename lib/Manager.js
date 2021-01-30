const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = () => this.officeNumber;

    getRole = () => this.role;
}

const managerInfo = [
    {
        type: 'input',
        message: "What is the Manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the Manager's Employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the Manager's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the Manager's Office Number?",
        name: 'office'
    },
]

module.exports = {
    Manager,
    managerInfo,
};