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
      default: 'index',
    }
  ]

// TODO: Create a function to write README file
const writeReadMeFile = (userFileName, fileData) => {
    fileName = `${userFileName}.md`;
    fileData = `
    #











    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/picnic">
      <title>Billy</title>
    </head>
    <body>
      <div style="overflow: hidden;height: 50px;"> <!-- For Demo, Represents the body -->
        <nav>
          <a href="#" class="brand">
            <span>About Me Page</span>
          </a>
          <!-- responsive-->
          <input id="bmenub" type="checkbox" class="show">
          <label for="bmenub" class="burger pseudo button">menu</label>
          <div class="menu">
            <a href="https://www.youtube.com/watch?v=o-YBDTqX_ZU" class="button">Fun</a>
          </div>
        </nav>
      </div>
      <div class="flex one six-800">
        <section class="full third-800">
          <h1>${fileData.userName}</h1>
          <h3>${fileData.userGithub}</h3>
        </section>
        <p class="full two-third-800">${fileData.userDesc}</p>
      </div>
    
      <article class="card">
        <header>
          <h3>LinkedIn URL</h3>
        </header>
        <footer>
          <a href="${fileData.linkedInURL}" class="button">Link</a>
        </footer>
      </article>
      <article class="card">
      <header>
        <h3>GitHub URL</h3>
      </header>
      <footer>
        <a href="${fileData.githubURL}" class="button">Link</a>
      </footer>
    </article>
    </body>
    </html>
    `
    fs.writeFile(fileName, fileData, (err) =>
      err ? console.err(err) : console.log(fileData)
    );
  }



// TODO: Create a function to initialize app
const grabFromUser = () => {
    inquirer
      .prompt(questionsArray)
      .then((answers) => {
        console.log(answers);
        writeReadMeFile(answers.userFileName, answers);
      })
  }

// Function call to initialize app
grabFromUser();