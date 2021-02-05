const fs = require('fs');
const inquirer = require ('inquirer');
const chalk = require ('chalk');
const emoji = require ('node-emoji');
const questions = require ('./questions');
const template = require ('./template');

let employeesArray = [];

class Employee{
    constructor(name, email, id, role, office, github, school){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.office = office;
        this.github = github;
        this.school = school;
        this.icon;
        return this;
    }
    assignIcon(){
        if (this.role === 'Manager'){
            this.icon = `<span><i class="fas fa-mug-hot"></i></span>`
        } else if (this.role === 'Engineer'){
            this.icon = `<i class="fas fa-glasses"></i>`
        } else {
            this.icon = `<i class="fas fa-user-graduate"></i>`
        }
        return this;
    }
}

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
        let e = new Employee(response.name, response.email, response.id, response.role, response.office, response.github, response.school);
        e.assignIcon();
        employeesArray.push(e);

        if (response.add_more){
            getEmployees();
        } else {
            // const html = template(employeesArray);
            // fs.writeFileSync('./index.html', html);
            console.log('\nHere are your employees and their information\n', employeesArray)
            console.log(goodbye);
            return;
        }

    } catch (error) {
        console.log(error);
        console.log(errorDetected);
    }
};

getEmployees();

module.exports = employeesArray;