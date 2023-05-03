// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is your title name?',
        name: 'titleName',
    },
    {
        type: 'input',
        message: 'Whats the description for your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What do you need to do to use your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are some examples?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List credentials for outsources?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'What type of license would you like?',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License'],
      },])
    .then(({
        titleName,
        description,
        installation,
        usage,
        credits,
        license,
      })=>{
        const template = `# ${titleName}
        
        #Description
        
        ${description}
        
        ## Installation
        
        ${installation}
        

        ## Usage

        ${usage}

        ### credits

        ${credits}

        ### License

        ${license}`;

        writetoFile(titleName, template);
      }
      );
    
// TODO: Create a function to write README file
function writetoFile(filename, data){
    fs.writeFile(`./${filename}.md`, data, (err)=>{
        if(err){
            console.log(err)
        }
        console.log("README file has been created!");
    })}
