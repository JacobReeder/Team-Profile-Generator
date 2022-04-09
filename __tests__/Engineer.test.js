
const Engineer = require('../lib/Engineer');

test ('Employee Profile: Engineer', () => {
    const employee = new Engineer ('employee', 'id', 'email', 'role', 'github');

    expect(employee.name).toBe("employee");
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.role).toBe('role')
    expect(employee.github).toBe('github')

})




