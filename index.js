
//node modules
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

//HTML page
const generateHtml = require('./src/generateHtml');
const Employee = require('./lib/Employee');

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






const init = async () => {
  console.log('Please answer the following questions:');

  let employee = await askQuestions();
  console.log(employee)
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

