const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./src/page-template');
const fs = require('fs');
const inquirer = require('inquirer');
let team = [];

managerQ = () => {

    inquirer
        .prompt([
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
        ])
        .then(({ name, id, email, office }) =>
            {
                team.push(new Manager(name, id, email, office));
                console.log(team);

            });
};


// managerQ();