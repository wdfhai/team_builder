const fs = require('fs');
const inquirer = require ('inquirer');
const chalk = require ('chalk');
const emoji = require ('node-emoji');
const questions = require ('./questions');
const template = require ('./template');
const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

let e;
const employeesArray = [];

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

${emoji.get('white_check_mark')} ${chalk.blueBright('Success! The HTML for your team was successfully written. Check it out. Cheers!')} ${emoji.get('white_check_mark')}
`;


console.clear();
console.log(greeting);

async function getEmployees() {
    try {
        const response = await inquirer.prompt(questions);
        if (response.role === "Manager"){
            e = new Manager (response.name, response.id, response.email, response.officeNumber);
            e.icon = `<span><i class="fas fa-mug-hot"></i></span>`;
        } else if (response.role === "Engineer"){
            e = new Engineer (response.name, response.id, response.email, response.github);
            e.icon = `<span><i class="fas fa-glasses"></i></span>`
        } else {
            e = new Intern(response.name, response.id, response.email, response.school);
            e.icon = e.icon = `<span><i class="fas fa-user-graduate"></i></span>`
        };
        employeesArray.push(e);

        if (response.add_more){
            getEmployees();
        } else {
            const html = template();
            const array = employeesArray.toString();
            fs.writeFileSync('./index.html', html);
            fs.writeFileSync('./array.js', array);
            console.log(goodbye);
        }

    } catch (error) {
        console.log(error);
        console.log(errorDetected);
    }
};

getEmployees();

const newArray = JSON.stringify(employeesArray);


module.exports = newArray;