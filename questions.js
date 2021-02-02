const roles = ['Team Leader', 'Developer', 'Intern'];

const questions = [
    {
        type:'input',
        message: 'Q. What is the name of the person you want to add to the team?',
        name: 'person_name',
    },{
        type:'input',
        message: 'Q. What is their email address?',
        name: 'email',
    },{
        type:'list',
        message: 'Q. What role do you want to assign them?',
        choices: roles,
        name: 'role',  
    }
];

const lead_questions = [
    {
        type:'number',
        message: 'Q. What is the room number assigned to them?',
        name: 'manager_office',
    },{
        type:'confirm',
        message: 'Do you want to add another member to the team?',
        name: 'add_more',
    }
];

const dev_questions = [
    {
        type:'input',
        message: 'Q. What is their GitHub username?',
        name: 'eng_github',
    },{
        type:'confirm',
        message: 'Do you want to add another member to the team?',
        name: 'add_more',
    }
];

const int_questions = [
    {
        type:'input',
        message: 'Q3. Which school are they from?',
        name: 'int_school',
    },{
        type:'confirm',
        message: 'Do you want to add another member to the team?',
        name: 'add_more',
    }
];

module.exports = questions, lead_questions, dev_questions, int_questions;