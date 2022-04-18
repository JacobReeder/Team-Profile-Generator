const Employee = require('./Employee');

class Manager extends Employee{
  constructor (cardEmployee) {
     const {name, id, email} = cardEmployee
     super(cardEmployee);
     const {officeNumber} = cardEmployee
     this.officeNumber = officeNumber;

  }
  getOffice() {
      return this.officeNumber;
  }
  getRole() {
    return "Manager";
}
}

module.exports = Manager;