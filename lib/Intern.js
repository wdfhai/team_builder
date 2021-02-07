const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.role = 'Intern';
        this.icon = `<span><i class="fas fa-user-graduate"></i></span>`;
        this.school = school;
        return this;
        }
        getName() {
            return this.name
        }
        getEmail(){
            return this.email
        }
        getId(){
            return this.id
        }
        getRole(){
            return this.role
        }
        getSchool(){
            return this.school
        }
        getIcon(){
            return this.icon
        }
}

module.exports = Intern;