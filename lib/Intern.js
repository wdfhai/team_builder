class Intern {
    constructor(name, id, email, school){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Intern';
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
}

module.exports = Intern;