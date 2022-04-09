
module.exports = function(val1, val2) {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};


//THOUGHTS/////should these functions be used to print html or should i be using fs.writefile for that? how shall i discern between those
//two scenarios? Update//I think I should be destructuring the array information, passing it into a function, and exporting the function.
//Ill probably still need to use fs.write but not in the same way we used it in module 9. 





/*const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');

const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your id. (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your id!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'email',
      message: 'Please enter your email.',
      default: true
    }
    
  ]);
};

//SAVE
//TODO: Should I add a seperate 'employee' append for each employee type?
//would i use module exports to link the employee sheets together?
/*const promptProject = portfolioData => {
  console.log(`
=================
Add a New Employee
=================
`);

  
  if (!employeeData.projects) {
    employeeData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};*/

//promptEmployee()
//  .then(promptEmployee)
//  .then(employeeData => {
//    console.log(employeeData);
//});