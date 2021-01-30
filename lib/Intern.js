const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.role = "Intern";
        this.school = school;
    }

    getSchool = () => this.school;

    getRole = () => this.role;
}

const internInfo = [
    {
        type: 'input',
        message: "What is the Intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the Intern's Employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the Intern's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What school does the Intern's attend?",
        name: 'school'
    },
]

module.exports = {
    Intern,
    internInfo,
};