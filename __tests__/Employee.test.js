
const Employee = require('../lib/Employee');

test ('creates an employee profile', () => {
    const employee = new Employee ('Employee', 'id', 'email');

    expect(employee.name).toBe("Employee");
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');




})




