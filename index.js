const Employee = require('./lib/Employee');
const { Manager, managerInfo } = require('./lib/Manager');
const { Engineer, engineerInfo } = require('./lib/Engineer');
const { Intern, internInfo } = require('./lib/Intern');
const html = require('./src/page-template');
const fs = require('fs');
const inquirer = require('inquirer');
const team = [];

managerQs = () => {
    inquirer
        .prompt(managerInfo)
        .then(({ name, id, email, office }) =>
            {
                team.push(new Manager(name, id, email, office));
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
        .prompt(engineerInfo)
        .then(({ name, id, email, github }) =>
            {
                team.push(new Engineer(name, id, email, github));
                addChoice();
            });
};

internQs = () => {
    inquirer
        .prompt(internInfo)
        .then(({ name, id, email, school }) =>
            {
                team.push(new Intern(name, id, email, school));
                addChoice();
            });
};

buildHTML = () => {
    fs.writeFile("index.html", html(team), err => err ? console.error(err) : console.log("Generating HTML..."));
};

managerQs();