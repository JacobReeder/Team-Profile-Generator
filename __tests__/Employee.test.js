/*--Create the Employee parent class.
--Create the Manager, Engineer, and Intern sub classes.

The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the tests directory) must all pass.

The first class is an Employee parent class with the following properties and methods:
name
id
email

///////////////////leave employee info on employee test for reference //////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////*/



const getName = require('../lib/intern.js'); 
test('checks if 10 is equal to 10', () => {
  expect(getName(10, 10)).toBe(true);
});


const getId = require('../lib/intern.js'); 
test('checks if 10 is equal to 10', () => {
  expect(getId(10, 10)).toBe(true);
});


const getEmail = require('../lib/intern.js'); 
test('checks if 10 is equal to 10', () => {
  expect(getEmail(10, 10)).toBe(true);
});




//TODO: Pass test
