const fs = require('fs');
const inquirer = require ('inquirer');
const enquirer = require('enquirer');
const chalk = require ('chalk');
const emoji = require ('node-emoji');
const questions = require ('./questions');

console.clear();

const greeting = 
`

                        ${emoji.get('file_folder')}  ${chalk.bgMagenta('Welcome to the Dream Team Builder!')}  ${(emoji.get('file_folder'))}  

        ${chalk.cyan('This application will generate a HTML file presenting your team and its members along with their roles and details.')}

`;


async function intro() {
    try {
        const response = await inquirer.prompt(questions);

        if (response.add_more){
            intro();
        } else {
            return;
        }
    } catch (error) {
        console.log(error);
        console.log('Whoopsie daisy. Error detected.');
    }
};

intro();