
const Employee = require('../lib/Employee');

test ('creates an employee profile', () => {
    const obj = {
        name: 'Jacob',
        id: 1234,
        email: 'jacob@gmail.com'
    }

    const employee = new Employee (obj);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test('creates an employee name', () => {  /////passes
    const obj = {
        name: 'Jacob',
        id: 1234,
        email: 'jacob@gmail.com'
    }

    const employee = new Employee (obj);

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));

});

test('creates an id', () => {     /////passes
    const obj = {
        name: 'Jacob',
        id: 1234,
        email: 'jacob@gmail.com'
    }
    const employee = new Employee (obj);

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('creates an email', () => {   /////passes
    const obj = {
        name: 'Jacob',
        id: 1234,
        email: 'jacob@gmail.com'
    }
    const employee = new Employee (obj);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});




