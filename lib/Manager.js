class Manager {
    constructor(name, id, email, office){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Manager';
    this.officeNumber = office;
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
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager;