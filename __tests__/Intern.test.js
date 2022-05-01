const Intern = require('../lib/Intern');

test ('Employee Profile: Intern', () => {
  const obj = {
    name: 'jacob',
    id: 1234,
    email: 'jacob@gmail.com',
    school: 'UCB'
  }

  const intern = new Intern (obj);

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));

})




test('creates school', () => {   /////
  const obj = {
      name: 'Jacob',
      id: 1234,
      email: 'jacob@gmail.com',
      school: 'UCB'
  }
  const intern = new Intern (obj);

  expect(intern.getSchool()).toEqual(expect.any(String));
});



