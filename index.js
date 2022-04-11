
const inquirer = require('inquirer');

////exporting from library
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const htmlGen = require('./src/page-template');

const { writeFile } = require('./utils/app'); 


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
            message: 'What is the managers name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter manager name!');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'id',
           message: 'What is the managers ID?(Required)', 
           validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter manager id!');
                return false;
            }
        }
        }, 

        {
           type: 'input',
           name: 'email',
           message: 'What is the manager email?(Required)', 
           validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter manager email!');
                return false;
            }
        }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: managersName => {
                if (managersName) {
                  return true;
                } else {
                  console.log("Please enter your manager's office number");
                  return false;
                }
              }
        },

    ])
        .then(answers => {

            this.newManager = new Manager(answers);
            this.manager.push(this.managerEmployee);
            this.getEmployeeTitle();
        });

   }

   //////////////////////////////////////////////////////////////////////

   getEmployeeTitle() {   
    
     inquirer
      .prompt([
       {  
        type: 'checkbox',
        name: 'employeeType',
        message: 'Which employee would you like to add?',
        choices: ['Engineer', 'Intern',]
       // when: ({ confirmEmployee }) => confirmAbout
    }
    ])

    .then(answers => {
    const {employeeType} = answers;
    this.employeeType = employeeType;
    this.nextEmployeeTitle();
    });

}

/////////////////////////////////Intern/////////////////////////////////////

    nextEmployeeTitle() {
    
     if (this.employeeType === 'Intern') {
  
           inquirer
           .prompt([
  
            {
                type: 'input',
                name: 'name',
                message: "What is intern name?",
                validate: managersName => {
                    if (managersName) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
        
            {
          type: 'input',
          name: 'id',
          message: 'What is this Interns id?',
          validate: managersName => {
              if(managersName) {
                  return true;
              } else {
                  return false;
          }
        }
        },

        {
        type: 'input',
        name: 'email',
        message: 'What is this Interns email?',
        validate: managersName => {
            if(managersName) {
                return true;
            } else {
                return false;
        }
      }
      },
        { type: 'input',
        name: 'school',
        message: 'What is this Interns school?',
        validate: managersName => {
            if(managersName) {
                return true;
            } else {
                return false;
        }
      }
      },
        
  
      ])
  
       .then(answers => {
           this.newIntern = new Intern(answers);
           this.intern.push(this.newIntern);

       });

///////////////////////////////////////Engineer//////////////////////////////////////////////

    } else if (this.employeeType === 'Engineer') { 
           

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineers name?",
            validate: managersName => {
                if (managersName) {
                  return true;
                } else {
                  console.log("Please enter your engineer's name");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineers id?",
            validate: managersName => {
                if (managersName) {
                  return true;
                } else {
                  console.log("Please enter your engineer's id");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineers email email?",
            validate: managersName => {
                if (managersName) {
                  return true;
                } else {
                  console.log("Please enter your engineers email");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineers GitHub username?",
            validate: managersName => {
                if (managersName) {
                  return true;
                } else {
                  console.log("Please enter username!");
                  return false;
                }
              }
        },
    ])
    .then(answers => { 
        this.newEngineer = new Engineer(answers);
        this.engineer.push(this.newEngineer);
        
    });

  }
 }

  addHtmlTemplate(cardManager, cardEngineer, cardIntern) {

    
     const htmlgen = new htmlGen()
    
     this.writeHtml(htmlgen.newHtml(cardManager, cardEngineer, cardIntern))
 }

 writeHtml(htmlTemplate) {
     writeFile(htmlTemplate) 
    
 }


}
new runApp().getEmployee();
