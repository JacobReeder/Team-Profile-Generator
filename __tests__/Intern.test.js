const Intern = require('../lib/Intern');

test ('Employee Profile: Intern', () => {
  const intern = new Intern ('employee', 'id', 'email', 'role', 'school');

  expect(intern.name).toBe("employee");
  expect(intern.id).toBe('id');
  expect(intern.email).toBe('email');
  expect(intern.role).toBe('role');
  expect(intern.school).toBe('school');

})