const Manager = require('../lib/Manager');


test ('Employee Profile: Manager', () => {
  const employee = new Manager ('employee', 'id', 'email', 'role', 'officeNumber');

  expect(employee.name).toBe("employee");
  expect(employee.id).toBe('id');
  expect(employee.email).toBe('email');
  expect(employee.role).toBe('role');
  expect(employee.officeNumber).toBe('officeNumber');

})
 

