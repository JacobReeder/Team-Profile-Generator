
const Employee = require('./Employee');

class Intern extends Employee{
  constructor (cardEmployee) {
     const {name, id,email} = cardEmployee
     super(cardEmployee);
     const {gitHub} = cardEmployee;
     this.school = school;



 ;
  }
  getRole() {
      return "Intern";
  }
  getSchool() {
      return this.school;
  }
}

module.exports = Intern;