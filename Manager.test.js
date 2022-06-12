const Employee = require('../lib/Employee');
const employee = new Employee ('Aisha', 0001, 'aishahajisirad@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
expect(employee.name).toBe('Aisha');
expect(employee.id).toBe(0001);
expect(employee.email).toBe('aishahajisirad@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Aisha');
});

test('test if we can get the id from the getId() method', ()=> {
    expect(employee.getId()).toBe('0001');
});

test('test if we can get the email from the getEmail() method', ()=> {
    expect(employee.getEmail()).toBe('aishahajisirad@gmail.com');
});