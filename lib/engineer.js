const Employee = require('./Employee');

class Engineer extends Employee{
  constructor (cardEmployee) {
     const {name, id, email} = cardEmployee
     super(cardEmployee);
     const {gitHub} = cardEmployee
     this.gitHub = gitHub;

  }
  getGitHub() {
    return `https://github.com/${this.gitHub}`
}
  getRole() {
      return 'Engineer'
  }
 
}

module.exports = Engineer;

////////////////// Methods passed into constructor functions