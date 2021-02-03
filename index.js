const fs = require('fs');
const inquirer = require ('inquirer');
const chalk = require ('chalk');
const emoji = require ('node-emoji');
const questions = require ('./questions');
const template = require ('./template');

const greeting = 
`

                ${emoji.get('male-technologist')}  ${chalk.bgMagenta('Welcome to the Dev Team Builder!')}  ${(emoji.get('female-technologist'))}  

${chalk.cyan('This application will generate a HTML file presenting your team and its members along with their roles and details.')}

`;

const errorDetected = 
`

${emoji.get('exclamation')} ${chalk.red('Looks like there was an error creating your file. Please address the error or report it, and restart the application')}${emoji.get('exclamation')}

`;

const goodbye = 
`

${emoji.get('white_check_mark')} ${chalk.blueBright('Dream Team assembled. Your HTML file was successfully written. Check it out. Cheers!')} ${emoji.get('white_check_mark')}
`;



console.clear();
console.log(greeting);

async function intro() {
    try {
        const response = await inquirer.prompt(questions);

        if (response.add_more){
            intro();
        } else {
            const html = template(response);   
            fs.writeFileSync('./index.html', html);
            console.log(goodbye);
            return;
        }

    } catch (error) {
        console.log(error);
        console.log(errorDetected);
    }
};

intro();