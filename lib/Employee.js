class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    };

    getName = () => this.name;

    getId = () => this.id;

    getEmail = () => this.email;

    getRole = () => this.role; 
};

const nextEntry = [
    {
        type: 'list',
        message: "Which role would you like add next?",
        choices: ["Engineer", "Intern", "I'm finished"],
        name: 'choice'
    },
];

module.exports = {
    Employee,
    nextEntry,
};