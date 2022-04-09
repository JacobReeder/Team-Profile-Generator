
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

const getRole = require('../lib/intern.js'); // Overridden to return Manager
test('checks if 10 is equal to 10', () => {
  expect(getRole(10, 10)).toBe(true);
});

const officeNumber = require('../lib/intern.js'); 
test('checks if 10 is equal to 10', () => {
  expect(officeNumber(10, 10)).toBe(true);
});

 
//TODO: Pass test
