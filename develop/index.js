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
        message: 'Provide a description of project'
    },
    {
        type: 'input',
        name: 'Instruction',
        message: 'Instruction'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide a description of how to get the development environment running'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use'
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
      message: 'Provide GitHub name',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Provide E-mail address'
    },
    {
      type: 'input',
      name: 'Credit',
      message: 'List your collaborators'
    },
    {
      type: 'input',
      name: 'Test',
      message: 'Provide examples on how to run them'
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Questions'
    },
  ])
  .then(answers => {
    writeFile("temp.txt", answers, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });

      
      writeFileAsync("README.md", generateMarkdown(answers))

});


// Function call to initialize app
//init()