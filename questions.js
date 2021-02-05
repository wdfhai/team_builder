const roles = ['Manager', 'Engineer', 'Intern'];

const questions = [
    {
        type:'input',
        message: 'Q. What is the name of the person you want to add to the team?',
        name: 'name',
    },{
        type:'input',
        message: 'Q. What is their email address?',
        name: 'email',
    },{
        type:'list',
        message: 'Q. What role do you want to assign them?',
        choices: roles,
        name: 'role',  
    },{
        type:'number',
        message: 'Q. What is their Office number',
        name: 'info',
        when: function (response){
            return response.role === "Manager";
        },
    },{
        type:'input',
        message: 'Q. What is their GitHub username?',
        name: 'info',
        when: function (response){
            return response.role === "Engineer";
        },
    },{
        type:'input',
        message: 'Q. Which school are they from??',
        name: 'info',
        when: function (response){
            return response.role === "Intern";
        },
    },{
        type:'confirm',
        message: 'Do you want to add another member to the team?',
        name: 'add_more',
    }
];



module.exports = questions;
