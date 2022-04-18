
const Employee = require('./Employee');

class Intern extends Employee{
  constructor (cardEmployee) {
     const {name, id, email} = cardEmployee
     super(cardEmployee);
     const {school} = cardEmployee
     this.school = school;



 
  }

  getSchool() {
    return this.school;
}
  getRole() {
      return "Intern";
  }

}

module.exports = Intern;