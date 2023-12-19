
const fs = require("fs");
const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const questions = require('inquirer');

questions
  .prompt([
    {
      type: 'input',
      message: 'What is your Project called?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'What does your project do? ',
      name: 'Description',
    },
    {
        type: 'input',
        message: 'How do you install the app ',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How do you use the app? ',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What licenses does the project use?',
        name: 'License',
        choices: ['email', 'phone', 'telekinesis'],
      },
  ])
  .then((response) => {
    const answers = `# ${response.Title} ## Description ${response.Description} ## Installation${response.Installation} ## Usage${response.Usage} ## License${response.License}`;

    fs.writeFile(`README.md`, (answers, null,`\t`), (err)=>{
  });

});




// function to initialize program
function init() {

}

// function call to initialize program
init();
