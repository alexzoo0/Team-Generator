const Engineer = require('../lib/Engineer');

test('engineer object', () => {
    const engineer = new Engineer('Alexis', 7654, 'alexisvelasquez15@gmail.com', 'Alexzoo0');

    expect(engineer.github).toEqual(expect.any(String));
});

test('engineer github', () => {
    const engineer = new Engineer('Alexis', 7654, 'alexisvelasquez15@gmail.com', 'Alexzoo0');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Employee Role', () => {
    const engineer = new Engineer('Alexis', 7654, 'alexisvelasquez15@gmail.com', 'Alexzoo0');

    expect(engineer.getRole()).toEqual('Engineer');
});
