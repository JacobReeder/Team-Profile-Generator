

//github  // GitHub username  ---Can this just be username or github username?




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

const getRole = require('../lib/intern.js'); // Overridden to return Intern
test('checks if 10 is equal to 10', () => {
  expect(getRole(10, 10)).toBe(true);
});

const getGithub = require('../lib/intern.js'); 
test('checks if 10 is equal to 10', () => {
  expect(getGithub(10, 10)).toBe(true);
});

//TODO: Pass test
//TODO: Export code to new employee file

