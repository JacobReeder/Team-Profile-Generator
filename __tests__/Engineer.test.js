
const Engineer = require('../lib/Engineer');

test ('Employee Profile: Engineer', () => {
    const obj = {
        name: 'Jacob',
        id: 1234,
        email:'jacob@gmail.com',
        gitHub: 'JacobReeder'
    }

    const engineer = new Engineer (obj);

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));

});




test('Github link', () => {   /////passes
    const obj = {
        name: 'Jacob',
        id: 1234,
        email: 'jacob@gmail.com',
        gitHub: 'JacobReeder'
    }
    const engineer = new Engineer (obj);

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('creates a role', () => {   /////passes
    const obj = {
        name: 'Jacob',
        id: 1234,
        email: 'jacob@gmail.com',
        gitHub: 'JacobReeder'
    }
    const engineer = new Engineer (obj);

    expect(engineer.getRole()).toEqual(expect.any(String));

});










