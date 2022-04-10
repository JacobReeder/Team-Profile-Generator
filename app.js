/*const inquirer = require('inquirer');
const employee = require('./employee');
const engineer = require('./engineer');
const intern = require('./intern');
const manager = require('./manager');

function teamRoster() {

    this.employees = [
        this.employees.push(employee('', ''));
        this.employees.push(engineer('', ''));
        this.employees.push(intern('', ''));
        this.employees.push(manager('', ''));
    ];
}

teamRoster.prototype.initializeApp = function() {

    this.currentEmployee = this.employees[0];

    inquirer
    .prompt({
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    })
    // destructure name from the prompt object
    .then(({ name }) => {
      this.player = new Player(name);
  
      // test the object creation
      console.log(this.currentEnemy, this.player);
    });

};

module.exports = teamRoster;*/