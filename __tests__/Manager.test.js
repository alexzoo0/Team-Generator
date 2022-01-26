const Manager = require('../lib/Manager');

test('Manager Object', () => {
    const manager = new Manager('Alexis', 7654, 'alexisvelasquez15@gmail.com', 432);

    expect(manager.managerId).toEqual(expect.any(Number));
});

test('Employee Role', () => {
    const manager = new Manager('Alexis', 7654, 'alexisvelasquez15@gmail.com', 432);

    expect(manager.getRole()).toEqual('Manager');
});
