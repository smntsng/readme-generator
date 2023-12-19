
const fs = require("fs");

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
        choices: ['AFL-3.0',
        'Apache-2.0',
        'Artistic-2.0',
        'BSL-1.0',
        'BSD-2-Clause',
        'BSD-3-Clause',
        'BSD-3-Clause-Clear',
        'BSD-4-Clause',
        '0BSD',
        'CC',
        'CC0-1.0',
        'CC-BY-4.0',
        'CC-BY-SA-4.0',
        'WTFPL',
        'ECL-2.0',
        'EPL-1.0',
        'EPL-2.0',
        'EUPL-1.1',
        'AGPL-3.0',
        'GPL',
        'GPL-2.0',
        'GPL-3.0',
        'LGPL',
        'LGPL-2.1',
        'LGPL-3.0',
        'ISC',
        'LPPL-1.3c',
        'MS-PL',
        'MIT',
        'MPL-2.0',
        'OSL-3.0',
        'PostgreSQL',
        'OFL-1.1',
        'NCSA',
        'Unlicense',
        'Zlib'],
      },
      {
        type: 'input',
        message: 'Do you want to make a contribution? ',
        name: 'Contributing',
    },
      {
        type: 'input',
        message: 'What is your github username? ',
        name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
  },
  ])
  .then((response) => {
    const answers = `# ${response.Title} 

## Table of Contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Questions](#Questions)

## Description
${response.Description} 

## Installation 
${response.Installation} 

## Usage 
${response.Usage} 

## License 
${response.License}

## Contributing 
${response.Contributing}

## Questions 
https://github.com/${response.username} <br/>
${response.email}`
;

  
    fs.writeFile(`README.md`, answers, (err)=>{
  });

});