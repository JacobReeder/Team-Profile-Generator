const Employee = require('./Employee');

class Manager extends Employee{
  constructor (cardEmployee) {
     const {name, id,email} = cardEmployee
     super(cardEmployee);
     const {officeNumber} = cardEmployee;
     this.officeNumber = officeNumber;

  }
  getRole() {
      return "Manager";
  }
  getOffice() {
      return this.officeNumber;
  }
}

module.exports = Manager;