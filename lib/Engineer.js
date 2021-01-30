const { Employee } = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);

        this.role = "Engineer";
        this.github = github;
    };

    getGithub = () => this.github;

    getRole = () => this.role;
};

const engineerInfo = [
    {
        type: 'input',
        message: "What is the Engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the Engineer's Employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the Engineer's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the Engineer's GitHub username?",
        name: 'github'
    },
];

module.exports = {
    Engineer,
    engineerInfo,
};