const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./src/page-template');
const fs = require('fs');
const inquirer = require('inquirer');
let team = [];

managerQs = () => {

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
                // console.log(team);
                addChoice();
            });
};

addChoice = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Which role would you like add next?",
                choices: ["Engineer", "Intern", "I'm finished"],
                name: 'choice'
            },
        ])
        .then(({ choice }) =>
        {
            switch (choice) {
                case "Engineer": engineerQs();
                    break;
                case "Intern": internQs();
                    break;
                default: buildHTML();
            }
        });
};

engineerQs = () => {

    inquirer
        .prompt([
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
        ])
        .then(({ name, id, email, github }) =>
            {
                team.push(new Engineer(name, id, email, github));
                // console.log(team);
                addChoice();
            });
};

internQs = () => {

    inquirer
        .prompt([
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
        ])
        .then(({ name, id, email, school }) =>
            {
                team.push(new Intern(name, id, email, school));
                // console.log(team);
                addChoice();
            });
};

buildHTML = () => {
    fs.writeFile("index.html", html(team), err => err ? console.error(err) : console.log("Generating HTML..."));
};

managerQs();