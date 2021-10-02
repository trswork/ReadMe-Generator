// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        message: 'Description'
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
  .then(answers) = '';

  

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success! README.md has been created")
    });
}

const writeFileAsync = util.promisify(fs.writeToFile);

   // TODO: Create a function to initialize app
async function init() {
  inquirer.prompt()
  .then(function(data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data)
  })
};

// Function call to initialize app
init();