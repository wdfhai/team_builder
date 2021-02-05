
class Engineer {
    constructor(name, id, email, github){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Engineer';
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
}

module.exports = Engineer;
