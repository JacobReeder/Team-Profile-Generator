////refactoring code from module 9 
/*const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site'); can use this for fs.write?

////exporting from library
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


class runApp {
    constructor () {
        this.engineer = [];
        this.intern = [];
        this.manager = [];
        this.employeeType = "";
    
}

   getEmployee() {

   

     inquirer.prompt([
        {
            type: 'input',
            name: 'sample',
            message: 'Welcome to the Team Profile Generator.'
        },
            
  
  
  
         {   type: 'input',
            name: 'title',
            message: 'What is the employees name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee name!');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'id',
           message: 'What is the employee ID?(Required)', 
           validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter employee id!');
                return false;
            }
        }
        }, 

        {
           type: 'input',
           name: 'email',
           message: 'What is the employee email?(Required)', 
           validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter employee email!');
                return false;
            }
        }
        },

    ])
        .then(answers => {

            this.newEmployee = new teamMember(answers);
            this.employeeType.push(this.managerEmployee);
            this.getEmployeeTitle();
        });

   }

   getEmployeeTitle() {   
    
     inquirer
      .prompt([
       {  
        type: 'checkbox',
        name: 'employeeType',
        message: 'Which employee would you like to add?',
        choices: ['Engineer', 'Intern', 'Manager']
       // when: ({ confirmEmployee }) => confirmAbout
    }
    ])

    .then(answers => {
    const {employeeType} = answers;
    this.employeeType = employeeType;
    this.nextEmployeeTitle();
    });

}

    nextEmployeeTitle() {
    
     if (this.employeeType === 'Intern') {
  
           inquirer
           .prompt([
  
        {
          type: 'input',
          name: 'role',
          message: 'What is this Interns role?'
        },
        {
          type: 'input',
          name: 'school',
          message: 'What school did the Intern attend?'
        },
        {
  
      ])
  
  });*/

  
