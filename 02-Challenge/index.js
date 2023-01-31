<<<<<<< HEAD
//node modules
const inquirer = require("inquirer");
const fs = require("fs");

=======
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const employees = [];

const askQuestions = () => {
  const questions = [
    {
      name: 'name',
      type: 'input',
      message: 'What is the employee name?'
    },
    {
      name: 'id',
      type: 'input',
      message: 'What is the employee id?'
    },
    {
      name: 'email',
      type: 'input',
      message: 'What is the employee email?'
    },
    {
      name: 'role',
      type: 'list',
      message: 'What is the employee role?',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      name: 'officeNumber',
      type: 'input',
      message: 'What is the manager office number?',
      when: (answers) => answers.role === 'Manager'
    },
    {
      name: 'github',
      type: 'input',
      message: 'What is the engineer GitHub username?',
      when: (answers) => answers.role === 'Engineer'
    },
    {
      name: 'school',
      type: 'input',
      message: 'What is the intern school?',
      when: (answers) => answers.role === 'Intern'
    }
  ];

  return inquirer.prompt(questions);
};

const createHTML = () => {
  let html = '<html><head><title>Team Profile</title></head><body><h1>Team Profile</h1><ul>';

  employees.forEach((employee) => {
    html += `<li><h2>${employee.name} (${employee.role})</h2><ul>`;
    html += `<li>ID: ${employee.id}</li>`;
    html += `<li>Email: ${employee.email}</li>`;
    if (employee.role === 'Manager') {
      html += `<li>Office number: ${employee.officeNumber}</li>`;
    } else if (employee.role === 'Engineer') {
      html += `<li>GitHub username: ${employee.github}</li>`;
    } else if (employee.role === 'Intern') {
      html += `<li>School: ${employee.school}</li>`;
    }
    html += '</ul></li>';
  });

  html += '</ul></body></html>';

  return html;
};

const init = async () => {
  console.log('Please answer the following questions:');

  let employee = await askQuestions();
  employees.push(employee);

  const answer = await inquirer.prompt([
    {
      name: 'addAnother',
      type: 'confirm',
      message: 'Would you like to add another employee?'
    }
  ]);

  if (answer.addAnother) {
    init();
 
  }};
>>>>>>> 3963e2591140d74d4451162567509a30e48d96d7
