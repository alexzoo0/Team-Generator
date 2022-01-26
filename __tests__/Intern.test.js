const Intern = require('../lib/Intern');

test('Intern Object', () => {
    const intern = new Intern('Alexis', 7654, 'alexisvelasquez15@gmail.com', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});

test('Intern School', () => {
    const intern = new Intern('Alexis', 7654, 'alexisvelasquez15@gmail.com', 'UT');

    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Employee Role', () => {
    const intern = new Intern('Alexis', 7654, 'alexisvelasquez15@gmail.com', 'UT');

    expect(intern.getRole()).toEqual('Intern');
});