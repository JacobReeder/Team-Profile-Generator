
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

function teamRoster() {

    this.employees = [
        this.employees.push(Employee('l', 'l')),
        this.employees.push(Engineer('', '')),
        this.employees.push(Intern('', '')),
        this.employees.push(Manager('', '')),
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

module.exports = teamRoster;



    ///export all the employee data to index, then use write file to send employee info, html and css
   
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  