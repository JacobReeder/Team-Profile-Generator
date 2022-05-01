const Manager = require('../lib/Manager');


test ('Employee Profile: Manager', () => {
  const obj = {
    name: 'Jacob',
    id: 1234,
    email: 'jacob.reeder1@gmail.com',
    officeNumber: 'officeNumber'
  }

  const manager = new Manager (obj);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));

});
 
test('office number', () => {   /////does not pass
  const obj = {
      name: 'Jacob',
      id: 1234,
      email: 'jacob@gmail.com',
      officeNumber: 'officeNumber'
  }
  const manager = new Manager (obj);

  expect(manager.getOffice()).toEqual(expect.any(String));
});

test('creates a role', () => {   /////does not pass
  const obj = {
      name: 'Jacob',
      id: 1234,
      email: 'jacob@gmail.com',
      officeNumber: 'officeNumber'
  }
  const manager = new Manager (obj);

  expect(manager.getRole()).toEqual(expect.any(String));

});
