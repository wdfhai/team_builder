const roles = ['Manager', 'Engineer', 'Intern'];

const questions = [
    {
        type:'list',
        message: 'Q. What role would you like to assign this employee?',
        choices: roles,
        name: 'role',  
    },{ 
        type:'input',
        message: 'Q. What is their name?',
        name: 'name',
    },{
        type:'number',
        message: 'Q. What is their ID number?',
        name: 'id',
    },{
        type:'input',
        message: 'Q. What is their email address?',
        name: 'email',
    },{   
        type:'number',
        message: 'Q. What is their Office number',
        name: 'officeNumber',
        when: function (response){
            return response.role === "Manager";
        },
    },{
        type:'input',
        message: 'Q. What is their GitHub username?',
        name: 'github',
        when: function (response){
            return response.role === "Engineer";
        },
    },{
        type:'input',
        message: 'Q. Which school are they from??',
        name: 'school',
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
