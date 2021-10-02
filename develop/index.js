// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');


const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of My Project'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a Description'
    },
    {
        type: 'input',
        name: 'Instruction',
        message: 'Instruction'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Usage'
    },  
    {
      type: 'list',
      name: 'License',
      message: 'License',
      choices: ['Apache', 'MIT', 'BSD', 'GPL']
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'GitHub',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'E-mail'
    },
    {
      type: 'input',
      name: 'Credit',
      message: 'Credit'
    },
    {
      type: 'input',
      name: 'Test',
      message: 'Test'
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Questions'
    },
  ])
  .then(answers => {
    writeToFile(answers)
    console.log("Success! README.md has been created")
}).catch((err) => console.error(err));

var writeToFile = answers=> {
    writeFileAsync("README.md", generateMarkdown(answers))
}

// Function call to initialize app
//init()