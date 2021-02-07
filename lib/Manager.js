const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.role = 'Manager';
        this.officeNumber = officeNumber;
        this.icon = `<span><i class="fas fa-mug-hot"></i></span>`;
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
        getIcon(){
            return this.icon
        }
}

module.exports = Manager;