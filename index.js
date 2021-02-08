const fs = require('fs');
const inquirer = require ('inquirer');
const chalk = require ('chalk');
const emoji = require ('node-emoji');
const questions = require ('./questions');
const template = require ('./template');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

let e;
let employeesArray = [];

const greeting = 
`

                ${emoji.get('male-technologist')}  ${chalk.bgMagenta('Welcome to the Team Builder!')}  ${(emoji.get('female-technologist'))}  

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
        assignIconAndDesc(response);
        employeesArray.push(e);

        if (response.add_more){
            getEmployees();
        } else {
            console.log(employeesArray);
            const cards = employeesArray.map(e=>`
                <div class='card' id='memberCard'>
                    <div class='card-header'>
                        <p id='name'>${e.name}</p>
                        <p id='role'>${e.icon} ${e.role}</p>
                    </div>
                    <div class='card-body'>
                        <div class='info'>
                            <p>ID: ${e.id}</p>
                        </div>
                        <div class='info'>
                            <p>Email: ${e.email}</p>
                        </div>
                        <div class='info'>
                            <p>${e.desc}</p>
                        </div> 
                    </div>
                </div>
                `);
            console.log(cards);
            const html = template(cards)
            fs.writeFileSync('./index.html', html);
            console.log(goodbye);
        }

    } catch (error) {
        console.log(error);
        console.log(errorDetected);
    }
};

getEmployees();

function assignIconAndDesc(response){
    if (response.role === "Manager"){
        e = new Manager (response.name, response.id, response.email, response.officeNumber);
        e.icon = `<span><i class="fas fa-mug-hot"></i></span>`;
        e.desc = 'Office Number: '+ e.officeNumber;
    } else if (response.role === "Engineer"){
        e = new Engineer (response.name, response.id, response.email, response.github);
        e.icon = `<span><i class="fas fa-glasses"></i></span>`
        e.desc = 'GitHub: '+ e.github;
    } else {
        e = new Intern(response.name, response.id, response.email, response.school);
        e.icon =`<span><i class="fas fa-user-graduate"></i></span>`;
        e.desc = 'School: '+ e.school;
    }
};