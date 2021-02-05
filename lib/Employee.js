class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
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
}
module.exports = Employee;