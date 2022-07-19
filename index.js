// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questionsArray = [
    {
      message: `What is the title of your project?`,
      name: 'projTitle',
    },
    {
      message: `What's your name?`,
      name: 'userName',
    },
    {
      message: `What's a short description of the project?`,
      name: 'userDesc',
    },
    {
      message: `What's your email address?`,
      name: 'emailInput',
    },
    {
      message: `What's your GitHub profile URL?`,
      name: 'githubURL',
    },
    {
      message: `What did you want to name this html file?`,
      name: 'userFileName',
      default: 'readME',
    },
    {
        message: `What are the instructions for installation?`,
        name: 'install',
      },
      {
        message: `What is the usage of this project?`,
        name: 'usage',
      },
      {
        message: `Who are the contributors of this project?`,
        name: 'contributors',
      }
  ]
// TODO: Create a function to write README file
const writeReadMeFile = data => {
    return new Promise((resolve, reject) => {
        // make a readme file and add to Generated folder
        fs.writeFile('./Generated/README.md', data, err => {
            // if there's an error, reject the Promise and send the error to .catch() method
            if (err) {
                reject (err);
                // return out of the function here to make sure the Promise doesn't continut to execute the resolve() function
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: console.log('Success! Navigate to the "Generated" folder to see your README!')
            });
        })
    })
} // Unsure why it's not writing any feedback would be appreciated.

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questionsArray);
}
// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeReadMeFile(readmeInfo);
})