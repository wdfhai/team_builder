const fs = require('fs');
const inquirer = require ('inquirer');
const chalk = require ('chalk');
const emoji = require ('node-emoji');
const questions = require ('./questions');
const template = require ('./template');

let members = [];
let i ;

class Member{
    constructor(name, email, role, info){
        this.name = name;
        this.email = email;
        this.role = role;
        this.info = info;
        this.id;
        this.icon;
        return this;
    }
    assignIcon(){
        if (this.role === 'Manager'){
            this.icon = `<i class="fas fa-mug-hot"></i>`
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

async function intro() {
    try {
        const response = await inquirer.prompt(questions);
        let member = new Member(response.name, response.email, response.role, response.info);
        console.log(member);
        members.push(member);

        if (response.add_more){
            const html = template(response);
            console.log(html);  
            fs.writeFileSync('./index.html', html);
            intro();
        } else {
            members.forEach((member)=>{
                member.id = parseInt(members.indexOf(member)) + 1;
                member.assignIcon();
                console.log(member);
                console.log(member.id);
            })
            console.log(goodbye);
            return;
        }

    } catch (error) {
        console.log(error);
        console.log(errorDetected);
    }
};

intro();