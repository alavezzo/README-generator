// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!')
                return false;
            }
        }
    },
    {      
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter instructions for installation of your application. (Required)',
        validate: instructionInput => {
            if (instructionInput) {
                return true;
            } else {
                console.log('Please provide a insturctions for the installation of your application!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter information pertaining to the proper usage of this application. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information for the proper usage of your application!')
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmOpenSource',
        message: 'Would you like people to contribute to this project?',
        default: false,
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines on how to contribute to this project.',
        when: ({ confirmOpenSource }) => {
            if (confirmOpenSource) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Did you create tests for this application?',
        default: false,
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to run tests on this application',
        when: ({ confirmTests }) => {
            if (confirmTests) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Is this project protected by a license?',
        default: false,
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you protected by?',
        choices: ['MIT', 'Apache 2.0', 'ISC License', 'GNU GPLv2', 'GNU GPLv3', 'The Unlicense', 'Mozilla Public License 2.0', 'Boost Software License 1.0'],
        when: ( {confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please provide your GitHub username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please provide your email address!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter instructions on how to get in touch with you.'
    }
];

function promptUser() {
    return inquirer.prompt(questions)
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
}


// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(data => {
        return generateMarkdown(data)
    })
    .then(content => {
       return writeToFile('./dist/README.md', content)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse)
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app

init();

