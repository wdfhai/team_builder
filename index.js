const fs = require('fs');
const inquirer = require ('inquirer');
const enquirer = require('enquirer');
const chalk = require ('chalk');
const emoji = require ('node-emoji');
const questions = require ('./questions');
// const lead_questions = require ('lead_questions');
// const dev_questions = require ('dev_questions');
// const int_questions = require ('int_questions');

async function intro() {
    try {
        const first_response = await inquirer.prompt(questions);

        console.log(first_response);

        if (first_response.role === 'Team Leader'){
            console.log('got the leader job');
        } else if (first_response.role === 'Developer'){
            console.log('got the dev job');
        } else if (first_response.role === 'Intern'){
            console.log('got the intership');
        } else {
            console.log('didnt gt a job');
        };
    } catch (error) {
    console.log('Whoopsie daisy. Error detected.');
    }
};

intro();