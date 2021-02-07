const Employee = require('./Employee')
class Engineer extends Employee{
    constructor(name, id, email, github){
    super(name, id, email)
    this.role = 'Engineer';
    this.icon = `<span><i class="fas fa-glasses"></i></span>`;
    this.github = github;
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
    getGithub(){
        return this.github
    }
    getIcon(){
        return this.icon
    }
}

module.exports = Engineer;
